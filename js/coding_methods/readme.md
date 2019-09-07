- 难点 
没做过的，难做的
分享？ 小程序分享
onShareAppMessage()


- wx.setNavigationBarTitle ('ffff')
位置， app navigationBar 
1. title
/detail/index?id=123|124 queryString
2.onLoad(options)
    this.setData({
        id: options.id
    })
    wx.request()   返回文章的详情 
    生命周期拿id参数，
     this.loadDetail


     界面怎么样
     <import src="">
     <scroll-view scroll-y="true" enable-back-to-top="true">
        <!-- 标题 -->
        <view class="wrapper">
        <view class="header">
            <view class="title">
            {{detailData.title}}
            </view>
            <view>
        </view>
        <view class="content">
        <template is="wxParse" data="{{wxParseData:article.nodes}}">
        </view >
        </view>
        <!-- 底栏 -->
        <view class="footer-bar">
        弹性布局
        <icon type="">
        </view>
     </scroll>