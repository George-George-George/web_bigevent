$(function () {
    const initArticleList = () => {
        $.ajax({
            type: "GET",
            url: '/my/article/cates',
            success: (res) => {
                if (res.status !== 0) return layer.msg('获取文章列表失败')
                layer.msg('获取文章列表')
                const htmlStr = template('tpl-table', res)
                $('tbody').empty().html(htmlStr)
            }
        })
    }
    let indexAdd = null
    $('#btnAddCate').click(function () {
       indexAdd =  layer.open({
            type: 1,
            area: ["500px", "250px"],
            title: "添加文章分类",
            content: $('#dialog-add').html(),
        });
    })

    $('body').on('submit','#form-add',function(e){
        e.preventDefault();
        $.ajax({
            type: 'POST',
            url:'/my/article/addcates',
            data:$(this).serialize(),
            success: (res) => {
                if(res.status !== 0)return layer.msg('添加失败')
                layer.msg('添加成功')
                initArticleList()
                layer.close(indexAdd)
            }
        })
    })

    
    initArticleList()

})