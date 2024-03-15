<template>
    <a-table :columns="columns" :data="data" style="margin-top: 20px">
        <template #name="{ record, rowIndex }" >
            <a-input v-if="record.isEdit" v-model="record.name" />
            <div v-else>{{ record.name }}</div>
        </template>
        <template #address="{ record, rowIndex }" >
            <a-input v-if="record.isEdit" v-model="record.address" />
            <div v-else>{{ record.address }}</div>
        </template>
        <template #province="{ record,rowIndex }">
            <a-select v-if="record.isEdit" v-model="record.province" @change="()=>{record.city=''}">
                <a-option v-for="value of Object.keys(options)">{{ value }}</a-option>
            </a-select>
            <div v-else>{{ record.province }}</div>
        </template>
        <template #city="{ record,rowIndex }">
            <a-select v-if="record.isEdit" :options="options[record.province] || []" v-model="record.city" />
            <div v-else>{{ record.city }}</div>
        </template>
        <template #edit="{ record, rowIndex}">
            <div v-if="record.isEdit">
                <a-button @click="handleConfirm(record, rowIndex)">确定</a-button>
                <a-button @click="handleDelete(rowIndex)">删除</a-button>
                <a-button @click="handleCancel(rowIndex)">取消</a-button>
            </div>
            <a-button v-else @click="handleEdit(record, rowIndex)">编辑</a-button>
        </template>
    </a-table>
    <a-button @click="handleAdd">新增</a-button>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { columns, options, someData } from './constents.js';

const origin = ref({})
const data = reactive(someData);

const handleAdd = () => {
    origin.value = {}
    data.push({ isEdit: true })
}

const handleEdit = (record, index) => {
    if (data.some((item) => item.isEdit)) {
        return
    }
    origin.value = { ...record }
    data[index].isEdit = true
}

const handleCancel = (index) => {
    data[index] = { ...origin.value, isEdit: false }
}

const handleDelete = (index) => {
    data.splice(index, 1)
}

const handleConfirm = (record, index) => {
    data[index] = { ...record, isEdit: false }
}

</script>
