<template>
  <div class="app-container">
    <!-- 输入表单 -->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<<script>
import integralGradeApi from "@/api/integral-grade";
export default {
  data () {
    return {
      integralGrade: {},//表单数据
      saveBtnDisabled: false,//表单不可重复提交
    }
  },
  created () {
    if (this.$route.params.id) {
      // 如果获得参数，则回显数据
      this.fetchData(this.$route.params.id);
    }       
  },
  methods: {
    saveOrUpdate(){
      this.saveBtnDisabled = true
      if(this.integralGrade.id) {
        this.updateData()
      }else{
        this.saveData()
      }
    },
    //新增数据
    saveData(){
      // alert('提交保存或更新'+this.integralGrade),
      integralGradeApi.save(this.integralGrade).then(response=>{
        this.$message({
            type: 'success',
            message: response.message
        })
        //重新查询
        this.$router.push('/core/integral-grade/list')
      })
    },
    updateData(){
      integralGradeApi.updateData(this.integralGrade).then((response)=>{
        this.$message({
            type: 'success',
            message: response.message
        })
        //重新查询
        this.$router.push('/core/integral-grade/list')
      })
    },
    //数据回显
    fetchData(id){
      integralGradeApi.getById(id).then(response => {
      this.integralGrade = response.data.integralGrade
      })
    }    
  }

}
</script>


