<template>
  <div class="hello">
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
