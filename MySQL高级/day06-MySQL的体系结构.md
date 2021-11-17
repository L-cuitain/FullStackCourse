# Mysql的体系结构
整个MySQL Server由以下组成
* Connection Pool: 连接池组件
* Management Services & Utilities: 管理服务和工具组件
* SQL Interface: SQL接口组件
* Parser: 查询分析器组件
* Optimizer: 优化器组件
* Caches & Buffers: 缓冲池组件
* Pluggable Storage Engines: 存储引擎
* File System: 文件系统

数据库层级
* 连接层

最上层是一些客户端和链接服务,包含本地sock通信和大多数基于客户端/服务端工具实现的类似于TCP/IP的通信

* 服务层

第二层架构主要完成大多数的核心服务功能,如SQL接口,并完成缓存的查询,SQL的分析和优化,部分内置函数的执行

* 引擎层

存储引擎层,存储引擎真正的负责了MySQL中数据的存储和提取,服务器通过API和存储引擎进行通信

* 存储层

数据存储层,主要是将数据存储在文件系统之上,并完成与存储引擎的交互

