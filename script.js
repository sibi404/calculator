var text = ""
flag = 0
        function clicked(data){
            text = text + data
            console.log(text)
            document.getElementById("input").value=text
        }
        function eql(){
            res = eval(text)
            document.getElementById("input").value=res
            text = res.toString()
        }

        function del(){
            console.log(text)
            len = text.length
            sub = text.slice(0,len-1)
            console.log(sub)
            document.getElementById("input").value=sub
            text = sub
        }
        function clr(){
            text = ""
            document.getElementById("input").value=text
        }

        /*function clicked1(data){
            text = text + data
            if (flag == 1){
                document.getElementById("input").value = data
                flag = 0
            }
            else{
                if (data == '+' || data == '-' || data == '*' || data == '/'){
                    flag = 1
            }
                 document.getElementById("input").value=text

            }
            
            
        }*/