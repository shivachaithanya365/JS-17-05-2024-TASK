// Finding the length of an string
var a = "shiva";
console.log(a.length); //5

// for loop - index
for (i = 0; i < a.length; i++) {
    console.log(i);
} //0,1,2,3,4
// for loop - char
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
} //s,h,i,v,a
// for in - index
for (refname in a) {
    console.log(refname); //0,1,2,3,4
}
// for in - char
for (refname in a) {
    console.log(a[refname]); //s,h,i,v,a
}
// for in - index with 1 - position of string
for (refname in a) {
    console.log(+refname + 1);
} //1,2,3,4,5

// for of - char
for (refname of a) {
    console.log(refname);
} //c,h,a,i,t,a,n,y,a

//prints string chaithaya without a in it

// for loop
var a = "chaitanya";
for (i = 0; i <= 8; i++) {
    if (a[i] != "a") {
        console.log(a[i]);
    }
} //c,h,i,t,n,y

// for in
for (refname in a) {
    if (a[refname] != "a") {
        console.log(a[refname]);
    }
} //c,h,i,t,n,y

// for of
for (refname of a) {
    if (refname != "a") {
        console.log(refname);
    }
} //c,h,i,t,n,y

var a = "chaitanya";
for (i of a) var c = 0;
if (i == "a") {
    c++;
}
console.log(c); //1
