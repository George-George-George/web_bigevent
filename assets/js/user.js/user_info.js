$(function() {
    const form = layui.form;
    form.verify ({
        nickname :(value) => {
            if(value.length > 6) return '昵称长度不能超过6'
        }
    })
    const initUserinfo = () => {
        $.ajax({
            type: 'GET',
            url: '/my/userinfo',
            success: (res) =>{
                if(res.status !== 0) return layer.msg('res.message')
                layer.msg('重置成功')
                // console.log(res);
                form.val("formUserInfo", res.data);
            }
        })
    }
    $('#btnReset').click(function(e){
        // console.log(res);
    e.preventDefault()
    initUserinfo()

    })
    $('.layui-form').submit(function(e){
        e.preventDefault()
        $.ajax({
            type: 'POST',
            url:'/my/userinfo',
            data:$(this).serialize(),
            success: function(res){
                // console.log(res);
                if(res.status !== 0) return layer.msg('获取失败')
                layer.msg('获取成功')
                // console.log(res);
                window.parent.getUserInfo()
            }
        })
    })
    initUserinfo()
})