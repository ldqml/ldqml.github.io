<template>
  <div class="tabs">
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
