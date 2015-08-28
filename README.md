# NJLibrary-postMessage

Javascript postMessage 
 
## Usage 

### Parent 

#### loaded

The **loaded** method has to be added to the iframe itself, the purpose is to add a flag when the iframe is loaded.

```html
<iframe id="i_frame" src="..." onload="nj(this).loaded()"></iframe>
```

#### Call

The **call** method will post the **_auth_** and **_data_** to the iframe when the iframe is loaded. 

###### Auth
**Auth** is mainly used for checking, whether the iframe is receiving from the right parent. 


###### Data
**Data** contains any data which needed to be passed to the iframe.

```javascript
nj("#i_frame").call({
    'auth' : {
        'key' : '123'
    },
    'data' : {
        'item' : '123'
    }
});
```

### Iframe 

#### Listen

The **listen** method is to received the data post from the parent. 

```javascript 
nj.fn.listen({
    'callback' : function (msg) {
        console.log(msg);
    }
});
```

## Demo / Testing 

- Clone the repository
- run mongoose-free-5.6.exe for windows, other OS please download it [here](https://www.cesanta.com/mongoose) 