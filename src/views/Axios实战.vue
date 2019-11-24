<template>
  <div>
    <p>axios实战</p>
    <router-link to='/'>返回首页</router-link>
    <div>
      <!-- <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button> -->
    </div>
    <div>
      <!-- 联系人卡片 -->
      <van-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <!-- 联系人列表 -->
      <van-popup
        v-model="showList"
        position="bottom"
      >
        <van-contact-list
          v-model="chosenContactId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </van-popup>

      <!-- 联系人编辑 -->
      <van-popup
        v-model="showEdit"
        position="bottom"
      >
        <van-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
import { Button,Toast } from "vant";
import { ContactCard, ContactList, ContactEdit } from "vant";
// import axios from 'axios'
// 轻提示
// import { Toast } from 'vant';
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }],
      instance:''
    };
  },
  created(){
    // 用封装的axios获取
    // async getList(){

    // }
  //   async function fn(){  //表示异步，这个函数里面有异步任务
  //       // let result = await  xxx //表示后面结果需要等待数据读取完后执行   
  //     let res = await
  //     this.$Http.getContactList()
  //     console.log(1)
  //     this.list=res.data 
  //   }
  //  fn()
    // this.instance = axios.create({
    //   baseURL:'http://127.0.0.1:5000',
    //   timeout:1000
    // })

    //  this.instance.get('/text1').then(res=>{
    //    console.log(res.data.data)
    //   this.list=res.data.data
    //  }).catch(err=>{
    //    console.log(err)
    //  })
  },
  computeds: {
    Button,
    ContactCard,
    ContactList,
    ContactEdit,
    Toast
    // [Button.name]:Button
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {


    // vant的联系人模块
    // 添加联系人
    async onAdd() {
      
      // 获取数据
      let res = await
      this.$Http.getContactList()
      console.log(res.data )

      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
     
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;      
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;
      
      if (this.isEdit) {
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};


</script>
<style scoped>
</style>