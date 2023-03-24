let num=[2,3,4,5,60,120];
var count=[];
function sasi(num){
	for(i=0;i<num.length;i++){
		if(num[i]%3==0 && num[i]%4==0 && num[i]%5==0){
			count.push(num[i]);
		}
	}
	return count;
}
console.log(sasi(num));