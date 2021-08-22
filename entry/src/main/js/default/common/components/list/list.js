export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },
//    自定义组件被创建后，加入到Page组件树时，触发该回调，该回调触发时，表示组件将被进行显示，该声明周期可用于初始化显示相关数据
    onAttached() {
        this.$watch('list', newList => {
            console.log('list' + JSON.stringify(newList))
        })
    }
}