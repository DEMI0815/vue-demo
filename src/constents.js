export const options = {
    Beijing: ['Haidian', 'Chaoyang', 'Changping'],
    Sichuan: ['Chengdu', 'Mianyang', 'Aba'],
    Guangdong: ['Guangzhou', 'Shenzhen', 'Shantou'],
}

export const columns = [{
    title: 'Name',
    dataIndex: 'name',
    slotName: 'name',
}, {
    title: 'Address',
    dataIndex: 'address',
    slotName: 'address',
}, {
    title: 'Province',
    dataIndex: 'province',
    slotName: 'province',
}, {
    title: 'City',
    dataIndex: 'city',
    slotName: 'city',
}, {
    title: '编辑',
    dataIndex: 'edit',
    slotName: 'edit',
}];

export const someData = [{
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    province: 'Beijing',
    city: 'Haidian',
    email: 'jane.doe@example.com',
    isEdit: false,
}, {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
    isEdit: false,
}, {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    province: 'Sichuan',
    city: 'Mianyang',
    email: 'kevin.sandra@example.com',
    isEdit: false,
}, {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
    isEdit: false,
}, {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
    isEdit: false,
}]
