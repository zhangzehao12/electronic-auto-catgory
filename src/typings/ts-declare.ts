declare global {
    interface Window {
        vm: Object,
        // 首页winform提供的接口对象
        IndexActions: {
            loadData: Function,
            getFiles: Function,
            getMenuFile: Function,
            getDirectoryInfo: Function,
        }
    }
}
export default global;