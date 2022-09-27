import Modal from 'bootstrap/js/dist/modal';

export default {
    methods: {
        showModal() {
            // 用show()這個方法將modal呈現在畫面上
            this.modal.show();
        },
        
        hideModal() {
            // 用hide()這個方法將modal隱藏在畫面上
            this.modal.hide();
        }
    },

    mounted() {
        // 將Modal實體化，實體會指向外層的modal
        this.modal = new Modal(this.$refs.modal);       
    }
};