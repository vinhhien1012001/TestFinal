// let res= () =>{

// }

/**
 * Bai 1
 * @param {*} n so phan tu 
 * @param {*} num input de tim so doi
 * @returns 
 */
let findOppositeNumber = (n,num) => {
    return (num+n/2)>=n? num-n/2 : num+n/2
}

// console.log(findOppositeNumber(12,2));
// console.log(findOppositeNumber(10,5));


let merge2String = (s1,s2) => {
    // let flag1=false;
    // let res="";
    // res=s1.split('');
    // console.log(res);
    // res=s2.split('');
    // console.log(res)
    // for ()

    let sp1=s1.split('');
    let sp2=s2.split('');
    let length;
    let res="";
    if (sp1.length>sp2.length)
        length=sp2.length
    else length=sp1.length;
    // console.log('True')
    for (i=0;i<length;i++){
        res+=sp1[i]
        res+=sp2[i]
    }
    if (sp1.length>length){
        for (i=length;i<sp1.length;i++){
            res+=sp1[i];
        }
    }
    else if (sp2.length>length){
        for (i=length;i<sp2.length;i++){
            res+=sp2[i];
        }
    }
    return res;
}

console.log(merge2String("abc",'123'));  
