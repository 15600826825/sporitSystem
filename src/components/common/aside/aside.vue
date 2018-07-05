<template>
  <div class="aside">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" 
              @select="handleselect" unique-opened router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i><span>运营</span></template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-menu"></i><span>数据概览</span>
          </el-menu-item>
           <el-menu-item index="1-2">
            <i class="el-icon-menu"></i><span>优惠码管理</span>
          </el-menu-item>
           <el-menu-item index="1-3">
            <i class="el-icon-menu"></i><span>标签管理</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i><span>课程</span></template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i><span>视频课程管理</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu"></i><span>职业路径管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i><span>用户</span></template>
        <el-menu-item index="/user">
          <i class="el-icon-menu"></i><span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/message">
          <i class="el-icon-menu"></i><span>消息管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i><span>考试</span></template>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-message"></i><span>订单</span></template>
        <el-menu-item index="5-1">
          <i class="el-icon-menu"></i><span>课程订单</span>
        </el-menu-item>
        <el-menu-item index="5-2">
          <i class="el-icon-menu"></i><span>退款管理</span>
        </el-menu-item>
        <el-menu-item index="5-3">
          <i class="el-icon-menu"></i><span>网校账单</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title"><i class="icon iconfont icon-cry"></i><span>分销</span></template>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title"><i class="el-icon-message"></i><span>招聘</span></template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script src="./aside.js"></script>

<style lang="scss">
@import "./aside.scss";
</style>
