//apis for quark 

//sends uri for png
window.addEventListener('message',event =>{
    console.log('receiving a message')
    if(event.data == "downloadPNG"){
        
        let uri = calculator.screenshot()
        let type = 'downloadPNG'
        
        event.source.postMessage({
            'type':type,
            'uri':uri
        }, event.origin)
    }
    else if(event.data == "quark_get_obj"){
        
        let obj = calculator.getState()
        let type = 'calculatorState'
        
        event.source.postMessage({
            'type':type,
            'obj':obj
        }, event.origin)
    }
    else if(event.data == "quark_set_data"){
        let obj = calculator.setState(event.data[payload])
        let type = 'calculatorState'
    }
},false)



