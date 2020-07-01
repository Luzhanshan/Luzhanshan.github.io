git  
分布式 版本控制系统


ls  列出目录 -a
cd 进入目录 ./ ../

touch 新建
tab 命令补全
vi 编辑器 i插入 esc推出插入 :wq保存并退出 vim
cat 查看
clear



git --version
git --help


git init  U

# 添加文件
git add readme.md  A
git add . 添加所有文件

# 提交文件
git commit -m "wrote a readme file" 


# 配置用户信息
git config --global user.email "you@example.com"
git config --global user.name "Your Name" 


U A M-2
git status


git log
git log --pretty=oneline