## 1 安装

- 接下来我们使用 curl 命令来下载安装：

```
# 进入 /usr/local
cd /usr/local

# 下载
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz

# 解压
sudo tar -zxvf mongodb-osx-x86_64-3.4.2.tgz

# 重命名为 mongodb 目录

sudo mv mongodb-osx-x86_64-3.4.2 mongodb
```

- 安装完成后，我们可以把 MongoDB 的二进制命令文件目录（安装目录/bin）添加到 PATH 路径中：

```
export PATH=/usr/local/mongodb/bin:$PATH
```


- 1、首先我们创建一个数据库存储目录 /data/db：

```bash
sudo mkdir -p /data/db
```

- 启动 mongodb，默认数据库目录即为 /data/db：

```bash
sudo mongod

# 如果没有创建全局路径 PATH，需要进入以下目录
cd /usr/local/mongodb/bin
sudo ./mongod
```


- 再打开一个终端进入执行以下命令：

```
$ cd /usr/local/mongodb/bin 
$ ./mongo
MongoDB shell version v3.4.2
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.2
Welcome to the MongoDB shell.
```


## 2 操作

- 运行s：这时候服务就可以开启了，链接默认端口是27017。

- 链接服务端，链接命令是mongo
	- 查看存在数据库命令：show dbs
	- 查看数据库版本命令：db.version()


- show dbs :显示已有数据库，如果你刚安装好，会默认有local、admin(config)，这是MongoDB的默认数据库，我们在新建库时是不允许起这些名称的。

- use admin： 进入数据，也可以理解成为使用数据库。成功会显示：switched to db admin。

- show collections: 显示数据库中的集合（关系型中叫表，我们要逐渐熟悉）。

- db:显示当前位置，也就是你当前使用的数据库名称，这个命令算是最常用的，因为你在作任何操作的时候都要先查看一下自己所在的库，以免造成操作错误。

- use db（建立数据库）：use不仅可以进入一个数据库，如果你敲入的库不存在，它还可以帮你建立一个库。但是在没有集合前，它还是默认为空。
- db.集合.insert( ):新建数据集合和插入文件（数据），当集合没有时，这时候就可以新建一个集合，并向里边插入数据。Demo：db.user.insert({"name":"jspang"})

- db.集合.find( ):查询所有数据，这条命令会列出集合下的所有数据，可以看到MongoDB是自动给我们加入了索引值的。Demo：db.user.find()
- db.集合.findOne( ):查询第一个文件数据，这里需要注意的，所有MongoDB的组合单词都使用首字母小写的驼峰式写法。
- db.集合.update({查询},{修改}):修改文件数据，第一个是查询条件，第二个是要修改成的值。这里注意的是可以多加文件数据项的，比如下面的例子。

```
db.jspang.update({"name":"jspang"},{"name":"jspang","age":"32"})
```


- db.集合.remove(条件)：删除文件数据，注意的是要跟一个条件。Demo:db.user.remove({"name":"jspang"})


- db.集合.drop( ):删除整个集合，这个在实际工作中一定要谨慎使用，如果是程序，一定要二次确认。


- db.dropDatabase( ):删除整个数据库，在删除库时，一定要先进入数据库，然后再删除。实际工作中这个基本不用，实际工作可定需要保留数据和痕迹的。

### 修改：初识update修改器

- $set修改器
	- 用来修改一个指定的键值(key),这时候我们要修改上节课的sex和age就非常方便了，只要一句话就可以搞定


	```
	db.workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})
	
	```

	- 修改嵌套内容(内嵌文档)

	```
	db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})
	```

- $unset用于将key删除

```
db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
```

- $inc对数字进行计算

```
db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})
```

- multi选项

```
db.workmate.update({},{$set:{interset:[]}})

db.workmate.update({},{$set:{interset:[]}},{multi:true})
```

- upsert选项
	- upsert是在找不到值的情况下，直接插入这条数据。比如我们这时候又来了一个新同事xiaoWang，我们这时候修改他的信息，age设置成20岁，但集合中并没有这条数据。这时候可以使用upsert选项直接添加。 
	- upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。


	```
	db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
	```

### 修改：update数组修改器

- $push追加数组/内嵌文档值
	- $push的功能是追加数组中的值，但我们也经常用它操作内嵌稳文档，就是{}对象型的值。先看一个追加数组值的方式，比如我们要给小王加上一个爱好(interset)为画画（draw）：

	```
	db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
	``` 

	- 当然$push修饰符还可以为内嵌文档增加值，比如我们现在要给我们的UI，增加一项新的技能skillFour为draw，这时候我们可以操作为：

	```
	db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})
	```

- $ne查找是否存在(总结：有则不修改, 没有则修改。)
	- 它主要的作用是，检查一个值是否存在，如果不存在再执行操作，存在就不执行，这个很容易弄反，记得我刚学的时候就经常弄反这个修改器的作用，给自己增加了很多坑。

	```
	例子：如果xiaoWang的爱好（interest）里没有palyGame这个值，我们就加入Game这个爱好。
	db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})
	```


- $addToSet 升级版的$ne
	- 它是$ne的升级版本（查找是否存在，不存在就push上去），操作起来更直观和方便，所以再工作中这个要比$en用的多。
	- 例子：我们现在要查看小王(xiaoWang)兴趣(interest)中有没有阅读（readBook）这项，没有则加入读书(readBook)的兴趣.

	```
	db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})
	```


- $each 批量追加
	- 例子：我们现在要给xiaoWang,一次加入三个爱好，唱歌（Sing），跳舞（Dance），编码（Code）。

	```
	var newInterset=["Sing","Dance","Code"];
	db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
	```

- $pop 删除数组值

	- $pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。

	```
	1：从数组末端进行删除
	-1：从数组开端进行删除
	```

	- 例子：现在要删除xiaoWang的编码爱好（code）。

	```
	db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})
	```


	- 数组定位修改
		- 有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。

例子，比如我们现在要修改xiaoWang的第三个兴趣为编码（Code），注意这里的计数是从0开始的。

```bash
db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})
			
```
		

### 修改：状态返回与安全

- db.runCommand( ):
	
	```
	db.workmate.update({sex:1},{$set:{money:1000}},false,true)
	var resultMessage=db.runCommand({getLastError:1})
	printjson(resultMessage);
	```
	- 上边的代码，我们修改了所有男士的数据，每个人增加了1000元钱(money)，然后用db.runCommand()执行，可以看到执行结果在控制台返回了。
	```
	{
        "connectionId" : 1,
        "updatedExisting" : true,
        "n" : 2,
        "syncMillis" : 0,
        "writtenTo" : null,
        "err" : null,
        "ok" : 1
	}
	```
	- false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
	- true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
	- getLastError:1 :表示返回功能错误，这里的参数很多，如果有兴趣请自行查找学习，这里不作过多介绍。
	- printjson：表示以json对象的格式输出到控制台。

- findAndModify:
	- 从名字上就可以看出，findAndModify是查找并修改的意思。配置它可以在修改后给我们返回修改的结果。我们先看下面的代码：

	```
	var myModify={
    findAndModify:"workmate",
    query:{name:'JSPang'},
    update:{$set:{age:18}},
	    new:true    //更新完成，需要查看结果，如果为false不进行查看结果
	}
	var ResultMessage=db.runCommand(myModify);
	 
	printjson(ResultMessage)

	```
	
	- query：需要查询的条件/文档
	- sort:    进行排序
	- remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
	- new:[boolean]返回更新前的文档还是更新后的文档。
	- fields：需要返回的字段
	- upsert：没有这个值是否增加。

### 查询：find的不等修饰符

- 简单查找：

```
db.workmate.find({"skill.skillOne":"HTML+CSS"})
```

- 筛选字段
	- 现在返回来的数据项太多，太乱，有时候我们的程序并不需要这么多选项。比如我们只需要姓名和技能就可以了。这时候我们需要写第二个参数，看下面的代码。 

	```
	db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true}
	)
	```
	- 细心的小伙伴会发现还不够完美，多了一个ID字段，这个也不是我们想要的，这时候只要把_id:false就可以了。当然这里的false和true，也可以用0和1表示。

	```
	b.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true,_id:false}
	)
	```

- 不等修饰符

	- 小于($lt):英文全称less-than
	- 小于等于($lte)：英文全称less-than-equal
	- 大于($gt):英文全称greater-than
	- 大于等于($gte):英文全称greater-than-equal
	- 不等于($ne):英文全称not-equal

	- 我们现在要查找一下，公司内年龄小于30大于25岁的人员

	```
	db.workmate.find(
	    {age:{$lte:30,$gte:25}},
	    {name:true,age:true,"skill.skillOne":true,_id:false}
	)
	```

- 日期查找
	- MongoDB也提供了方便的日期查找方法，现在我们要查找注册日期大于2018年1月10日的数据，我们可以这样写代码

	```
	var startDate= new Date('01/01/2018');
	db.workmate.find(
	    {regeditTime:{$gt:startDate}},
	    {name:true,age:true,"skill.skillOne":true,_id:false}
	)
	```

### 查询：find的多条件查询

- $in修饰符
	- in修饰符可以轻松解决一键多值的查询情况。就如上面我们讲的例子，现在要查询同事中年龄是25岁和33岁的信息。

```
db.workmate.find({age:{$in:[25,33]}},
    {name:1,"skill.skillOne":1,age:1,_id:0}
)
```

- $or修饰符
	- 它用来查询多个键值的情况，就比如查询同事中大于30岁或者会做PHP的信息。主要区别是两个Key值。$in修饰符是一个Key值，这个需要去比较记忆。

	```
	db.workmate.find({$or:[
	    {age:{$gte:30}},
	    {"skill.skillThree":'PHP'}
	]},
	    {name:1,"skill.skillThree":1,age:1,_id:0}
	)	
	```

- $and修饰符
	- $and用来查找几个key值都满足的情况，比如要查询同事中大于30岁并且会做PHP的信息，这时需要注意的是这两项必须全部满足。当然写法还是比较简单的。只要把上面代码中的or换成and就可以了。
	
	```
	db.workmate.find({$and:[
	    {age:{$gte:30}},
	    {"skill.skillThree":'PHP'}
	]},
	    {name:1,"skill.skillThree":1,age:1,_id:0}
	)
	```

- $not修饰符
	- 它用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息。需要注意的是$not修饰符不能应用在条件语句中，只能在外边进行查询使用。

	```
	db.workmate.find({
	    age:{
	        $not:{
	            $lte:30,
	            $gte:20
	        }
	    }
	},
	{name:1,"skill.skillOne":1,age:1,_id:0}
	)
	```

### 查询：find的数组查询

- 基本数组查询

```
db.workmate.find({interest:['画画','聚会','看电影']},
    {name:1,interest:1,age:1,_id:0} 
)

db.workmate.find({interest:'看电影'},
    {name:1,interest:1,age:1,_id:0} 
)
```

- $all-数组多项查询
	- 现在我们的条件升级了，要查询出喜欢看电影和看书的人员信息，也就是对数组中的对象进行查询，这时候要用到一个新的查询修饰符$all。看下面的例子：

	```
	db.workmate.find(
    {interest:{$all:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
	)
	```

- $in-数组的或者查询

	- 用$all修饰符，是需要满足所有条件的，$in主要满足数组中的一项就可以被查出来（有时候会跟$or弄混）。比如现在要查询爱好中有看电影的或者看书的员工信息。

	```
	db.workmate.find(
    {interest:{$in:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
	)
	```


- $size-数组个数查询
	- $size修饰符可以根据数组的数量查询出结果。比如现在我们要查找兴趣的数量是5个人员信息，这时候就可以使用$size。

	```
	db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0} 
	)
	```

- $slice-显示选项

	```
	有时候我并不需要显示出数组中的所有值，而是只显示前两项，
	比如我们现在想显示每个人兴趣的前两项，而不是把每个人所有的兴趣都显示出来。
	```

	- 这时候就显示出了每个人兴趣的前两项，如果我们想显示兴趣的最后一项，可以直接使用slice:-1，来进行查询。

	```
	db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0} 
	)
	```

### 查询：find的参数使用方法

- find参数：
	- query：这个就是查询条件，MongoDB默认的第一个参数。
	- fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
	- limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
	- skip:跳过多少个显示，和limit结合可以实现分页。
	- sort：排序方式，从小到大排序使用1，从大到小排序使用-1。

- 分页Demo：
	- 明白了上面这些选项，现在可以作一个最简单的分页，我们把同事集合（collections）进行分页，每页显示两个，并且按照年龄从小到大的顺序排列。

	```
	db.workmate.find({},
	{name:true,age:true,_id:false}).limit(0).skip(2).sort({age:1});
	```
	
- $where修饰符
	- 是一个非常强大的修饰符，但强大的背后也意味着有风险存在。它可以让我们在条件里使用javascript的方法来进行复杂查询。我们先来看一个最简单的例子，现在要查询年龄大于30岁的人员。
	
	```
	db.workmate.find(
    {$where:"this.age>30"},
    {name:true,age:true,_id:false}
)
	```
	- 这里的this指向的是workmate（查询集合）本身。这样我们就可以在程序中随意调用。虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，所以在工作中尽量减少$where修饰符的使用。

### 查询：find如何在js文本中使用（完结）

-  db.randomInfo.stats() 这个命令查看数据中的数据条数。
-  建立索引 db.randomInfo.ensureIndex({username:1})
- 查看现有索引 db.randomInfo.getIndexes()

### 索引：复合索引

- 复合索引就是两条以上的索引。

```
db.randomInfo.ensureIndex({randNum0:1})
```

- 指定索引查询（hint）

	- 课程开始时，我说了数字的索引要比字符串的索引快，这就需要一个方法来打破索引表的查询顺序，用我们自己指定的索引优先查询，这个方法就是hint().
	
	```
	var  rs= 
	db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});
	```

- 删除索引

```
db.randomInfo.dropIndex('randNum0_1');//索引的唯一ID
```


### 索引：全文索引

- 建立全文索引

```
db.info.ensureIndex({contextInfo:'text'})
```

- 全文索引查找
	- 建立好了全文索引就可以查找了，查找时需要两个关键修饰符:
	- $text:表示要在全文索引中查东西。
	- $search:后边跟查找的内容。

	```
	db.info.find({$text:{$search:"programmer"}})
	```
	
- 查找多个词
	- 全文索引是支持多个次查找的，比如我们希望查找数据中有programmer，family，diary，drink的数据（这是或的关系），所以两条数据都会出现。

	```
	db.info.find({$text:{$search:"programmer family diary drink"}})
	```
	
	- 如果我们这时候希望不查找出来有drink这个单词的记录，我们可以使用“-”减号来取消。

	```
	db.info.find({$text:{$search:"programmer family diary -drink"}})
	```
	
- 转义符：
	- 全文搜索中是支持转义符的，比如我们想搜索的是两个词（love PlayGame和drink），这时候需要使用\斜杠来转意。
	```
	db.info.find({$text:{$search:"\"love PlayGame\" drink"}})
	```


### 管理:用户的创建、删除与修改

- 创建用户：
	- 首先要进入我们的admin库中，进入方法是直接使用use admin 就可以。进入后可以使用show collections来查看数据库中的集合。默认是只有一个集合的（system.version）。
	- 创建用户可以用db.createUser方法来完成，里边参数还是蛮多的，代码我写在下边，然后对每一项做出了解释。

	```
		db.createUser({
	    user:"jspang",
	    pwd:"123456",
	    customData:{
	        name:'技术胖',
	        email:'web0432@126.com',
	        age:18,
	    },
	    roles:['read']
	})
	``` 	
	
	
	- 当然我们还可以单独配置一个数据库的权限，比如我们现在要配置compay数据库的权限为读写：

	```
	db.createUser({
    user:"jspang",
    pwd:"123456",
    customData:{
        name:'技术胖',
        email:'web0432@126.com',
        age:18,
    },
    roles:[
        {
            role:"readWrite",
            db:"company"
        },
        'read'
    ]
})
	```

```
数据库用户角色：read、readWrite；
数据库管理角色：dbAdmin、dbOwner、userAdmin;
集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；
备份恢复角色：backup、restore；
所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
超级用户角色：root
内部角色：__system
```

- 查找用户信息db.system.users.find()
- 删除用户：db.system.users.remove({user:"jspang"})
- 建权：
	- 启动建权 mongod --auth
	- 建权：db.auth("jspang","123456")
	- 登录 mongo -u jspang -p 123456 127.0.0.1:27017/admin

### 管理：备份和还原

- 数据备份

```
mongodump
    --host 127.0.0.1
    --port 27017
    --out D:/databack/backup
    --collection myCollections
    --db test
    --username username
    --password password
    
```

- 比如我们现在不小心删除了一个collections的数据，要进行恢复。现在删除randomInfo集合。

```
db.randomInfo.drop()
```

- 使用命令进行恢复

```
mongorestore --host 127.0.0.1 --port 27017 D:/databack/
```


## 杀死 mongod

- 开机有个 python 进程，拥有 root 权限，想把他关闭，再重新启动
用命令行 ps -ef | grep python 获取到 id 后，接着用｀kill id`,发现居然杀不死，我打开任务管理器，找到这个进程，居然也杀不死 是什么原因呢？

- 以root权限启动的，首先你得用root权限来杀：sudo kill id
如果还杀不死，用sudo kill -9 id
















