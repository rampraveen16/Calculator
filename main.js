
let takeValue = document.querySelectorAll('.no');
let displayDiv = document.getElementById("display");
let cond = document.querySelectorAll('.cond');
let reset = document.getElementById("reset");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");
let arr = [];
let preVal = [];
let condition;
let firstNo;
let prevCond;
let count = 0 ;
let isDecimal;
 
cond.forEach((element) => {
    element.disabled=true;
   
    element.addEventListener('click', function() {
        let _this = this;
        let value = _this.getAttribute('data-value');
        activeClass(_this);
        condition = value.trim();
        initProcess(condition);
        count++;
        

    });
});

function initProcess(condition) {
    if(count==0) {
         preVal.push(firstNo);
         arr = [];
         decimal.disabled = false;
            if (preVal.length == 2) {
                switch (condition) {
                    case '+':
                        condCheck(prevCond);
                        prevCond = condition;
                    break;

                    case '-':
                        condCheck(prevCond);
                        prevCond = condition;
                    break
                        
                    case '*':
                        condCheck(prevCond);
                        prevCond = condition;
                    break;

                    case '/':
                        condCheck(prevCond);
                        prevCond = condition;
                    break;

                     case '%':
                        condCheck(prevCond);
                        prevCond = condition;
                    break;
                }
            } 
            else {
                prevCond = condition;
            }
    }
    else {
        prevCond = condition;
    }
}
function condCheck(prevCond) {
    switch (prevCond) {
        case '-':
            var add = preVal[0] - preVal[1];
            update(add);
            break;

        case '+':
            var add = preVal[0] + preVal[1];
            update(add);
            break;
        case '*':
            var add = preVal[0] * preVal[1];
            update(add);
            break;

        case '/':
            var add = preVal[0] / preVal[1];
            update(add);
            break;

         case '%':
            var add = (preVal[0] * preVal[1]) / 100;
            update(add);
            break;

        default:
    }
}

    function update(add) {
        displayDiv.innerHTML = add;
        preVal = [add];
        firstNo = 0;
        
    }

    takeValue.forEach((element) => {
        element.addEventListener('click', function() {
            let _this = this;
            activeClass(_this);
            let value = _this.getAttribute('data-value');
            arr.push(value);
            let join = arr.join('');
            displayDiv.innerHTML = join;
            let init = parseFloat(join);
            firstNo = init;
            count=0;
            cond.forEach((element) => {
                element.disabled=false;
            });
            decimal.addEventListener('click',function(){
                this.disabled = true;
            });
            (preVal.length ==1) ? equal.disabled=false : equal.disabled=true;
        });
    });
function activeClass(_this) {
    cond.forEach((element) => {
         element.classList.remove('active');
    });
    takeValue.forEach((element) => {
        element.classList.remove('active');
    });
    _this.classList.add('active');
}
    reset.addEventListener('click', function() {
        displayDiv.innerHTML = '0';
        arr = [];
        preVal = [];
        firstNo = 0;
        equal.disabled=true;
         cond.forEach((element) => {
                element.disabled=true;

                 element.classList.remove('active');
        });

    });

    clear.addEventListener('click', function() {
        if (preVal.length == 0) {
            let z = arr;
            z.splice(-1);
            let join = z.join('');
            let i = parseFloat(join);
            let v = isNaN(i) ? 0 : i;
            displayDiv.innerHTML = v;
            firstNo = v;
        } else {
            let r = preVal[0];
            let z = r.toString().split('');
            z.splice(-1);
            let join = z.join('');
            let i = parseFloat(join);
            let v = isNaN(i) ? 0 : i;
            displayDiv.innerHTML = v;
            arr.push(v);
            preVal=[];
            firstNo = v;
            count =0;
        }

    });
    equal.addEventListener('click',function(){
        initProcess(condition);
        count++;
    });
    equal.addEventListener('click',function(){
    
    });
   



