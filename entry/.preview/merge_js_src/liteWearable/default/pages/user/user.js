export default {
    handleClick() {
        const el = this.$refs.canvas1;
        var dataURL = el.toDataURL();
        console.log(dataURL);
    }
}