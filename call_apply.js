const idCard = new Object({
    id:13699007447,
    fname:'tichavich',
    lname:'chusakul',
    birthday:'25/03/2535',
    address:'58 moo 7 t.huaybong chaiyaphum',
    info: function(){
        console.log(`id = ${this.id}, fname = ${this.fname}, lname = ${this.lname}, birthday = ${this.birthday}, address = ${this.address}`);
    }
});
idCard.info();

function change(){
    this.id = 123456789;
    this.fname = 'Mos';
    this.lname = 'Ticha';
    console.log(`id = ${this.id}, fname = ${this.fname}, lname = ${this.lname}`);
}
function change2(id,fname,lname){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    console.log(`id = ${this.id}, fname = ${this.fname}, lname = ${this.lname}`);
}
function change3(arg){
    let i = 0;
    for(key in this){
        this[key] = arg[i];
        i++;
    }
    console.log(`id = ${this.id}, fname = ${this.fname}, lname = ${this.lname}`);
}
//call
change.call(idCard);
change2.call(idCard,1234,'m','so');
change3.call(idCard,[11111,'sss',123]);
console.log('--------');

//apply
change2.apply(idCard,[1234,'mossss','solo231']);
