//callback
function fileOpen(file_name,callback){
    console.log(`เปิดไฟล์ชื่อ ${file_name}`);
    setTimeout(() => {
        console.log(`โหลดข้อมูลภายในไฟล์ ${file_name}`);
        callback(file_name);        
    }, 1000);
}

// const fn = 'dataset.xlsx';
// fileOpen(fn,function(res){
//     console.log(`ปิดไฟล์ชื่อ ${res}`);
//     console.log(`------`);
//     fileOpen('student.xlsx',(res)=>{
//         console.log(`ปิดไฟล์ชื่อ ${res}`);
//         console.log(`------`);
//         fileOpen('q3.pdf',(res)=>{
//             console.log(`ปิดไฟล์ชื่อ ${res}`);
//             console.log(`------`);
//         });
//     });
// });


//Promise
function chargeBattery(bat){
    return new Promise((resolve,reject)=>{
        const state = true;
        console.log(`เริ่มชาร์ตแบตเตอรี่ ${bat}`);
        setTimeout(()=>{
            if(state){
                resolve(`กำลังชาร์ตแบตเตอรี่ ${bat}`);
            }else{
                reject(`ชาร์ตไฟไม่เข้าแบตเตอรี่ ${bat}`);
            }
        },2000);
    });
}

// chargeBattery('PowerBank 12000 mAh').then((res)=>{
//     console.log(res);
//     console.log(`แบตเตอรี่เต็ม 100%`);
//     console.log(`------`);
//     chargeBattery('iPhone 13 Pro').then((res)=>{
//         console.log(res);
//         console.log(`แบตเตอรี่เต็ม 100%`);
//         console.log(`------`);
//         chargeBattery('Samsung Galaxy').then((res)=>{
//             console.log(res);
//             console.log(`แบตเตอรี่เต็ม 100%`);
//         });
//     });
// }).catch(error=>{
//     console.log(error);
// }).finally(()=>{    
    
// });


//Async & Await
function uploadFile(file_name){
    return new Promise((resovle,reject)=>{
        const state = true;
        console.log(`เริ่มอัพโหลดไฟล์ ${file_name}`);
        setTimeout(()=>{
            if(state){
                resovle(`อัพโหลดไฟล์ ${file_name}`);
            }else{
                reject(`อัพโหลดไฟล์ : เกิดข้อความผิดพลาด ${file_name}`);
            }
        },1000);
    });
}
async function initUpload(){
    await uploadFile('image55.jpg').then((res)=>{
        console.log(res);
    }).finally(()=>{
        console.log('-------------');
    });
    await uploadFile('score_student.xlsx').then((res)=>{
        console.log(res);
    }).finally(()=>{
        console.log('-------------');
    });
    await uploadFile('test.txt').then((res)=>{
        console.log(res);
    });
}
initUpload();

//Fetch API
// async function FetchAPI(url){
//     try{
//         const api = await fetch(url);
//         const data = await api.json();
//         console.log(data);
//     }catch(error){
//         console.error(`Error: ${error}`);
//     }
// }
// FetchAPI('https://dummyjson.com/products');


