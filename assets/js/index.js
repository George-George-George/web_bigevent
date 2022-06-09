function getUserInfo(){
    $.ajax({
        method: "GET",
        url:'/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem("token"),
        // },
        success: function(res){
            // console.log(res);
            if(res.status != 0) return layer.msg(res.message)
            layer.msg(res.message)
            renderAvatar(res.data)
        }
    })

}



const renderAvatar = (user) => {
    const name =user.username || user.nickname
    $('#welcome').html(`欢迎 ${name}`)
    if(user.user_pic !== null) {
        $('.layui-nav-img').attr('src',user.user_pic).show()
        $('.text-avatar').hide()
    }else{
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
$('#btnLogout').click(function(){
    layer.confirm("是否退出",{icon:3,title:"提示",},function(index){
        localStorage.removeItem('token')
        location.href = '/login.html'
    })
})
getUserInfo()
