# Repro Jest component library template issue

* `repro-jest` workspace contains a `repro-lib` library 
* `repro-project` uses the library from `jest-repro/dist/repro-lib`

Jest tests fail:

`npm run jest` and select all

```
 console.error node_modules/jsdom/lib/jsdom/virtual-console.js:29                                                                                                                              
   Error: Error: connect ECONNREFUSED 127.0.0.1:80                                                                                                                                             
       at Object.dispatchError (C:\Users\antti.kettunen\git\jest-test\repro-project\node_modules\jsdom\lib\jsdom\living\xhr-utils.js:54:19)                                                    
       at Request.<anonymous> (C:\Users\antti.kettunen\git\jest-test\repro-project\node_modules\jsdom\lib\jsdom\living\xmlhttprequest.js:675:20)                                               
       at Request.emit (events.js:215:7)                                                                                                                                                       
       at Request.onRequestError (C:\Users\antti.kettunen\git\jest-test\repro-project\node_modules\request\request.js:877:8)                                                                   
       at ClientRequest.emit (events.js:210:5)                                                                                                                                                 
       at Socket.socketErrorListener (_http_client.js:406:9)                                                                                                                                   
       at Socket.emit (events.js:210:5)                                                                                                                                                        
       at emitErrorNT (internal/streams/destroy.js:92:8)                                                                                                                                       
       at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)                                                                                                                               
       at processTicksAndRejections (internal/process/task_queues.js:80:21) undefined                                                                                                          
                                                                                                                                                                                               
FAIL  src/app/app.component.spec.ts                                                                                                                                                            
 AppComponent                                                                                                                                                                                  
   × should create the app (2159ms)                                                                                                                                                            
   × should have as title 'repro-project' (39ms)                                                                                                                                               
   × should render title (27ms)                                                                                                                                                                
                                                                                                                                                                                               
 ● AppComponent › should create the app                                                                                                                                                        
                                                                                                                                                                                               
   Uncaught (in promise): Failed to load repro-lib.component.html                                                                                                                              
                                                                                                                                                                                               
     at resolvePromise (node_modules/zone.js/dist/zone.js:832:39)                                                                                                                              
                                                                                                                                                                                               
 ● AppComponent › should create the app                                                                                                                                                        
                                                                                                                                                                                               
   This test module uses the component ReproLibComponent which is using a "templateUrl" or "styleUrls", but they were never compiled. Please call "TestBed.compileComponents" before your test.
                                                                                                                                                                                               
     at TestBedViewEngine.Object.<anonymous>.TestBedViewEngine._initIfNeeded (../../packages/core/testing/src/test_bed.ts:389:17)                                                              
     at TestBedViewEngine.Object.<anonymous>.TestBedViewEngine.createComponent (../../packages/core/testing/src/test_bed.ts:592:10)                                                            
     at Function.Object.<anonymous>.TestBedViewEngine.createComponent (../../packages/core/testing/src/test_bed.ts:241:36)                                                                     
     at src/app/app.component.spec.ts:18:29                                                                                                                                                    
                                                                                                                                                                                               
 ● AppComponent › should have as title 'repro-project'                                                                                                                                         
                                                                                                                                                                                               
   This test module uses the component ReproLibComponent which is using a "templateUrl" or "styleUrls", but they were never compiled. Please call "TestBed.compileComponents" before your test.
                                                                                                                                                                                               
     at TestBedViewEngine.Object.<anonymous>.TestBedViewEngine._initIfNeeded (../../packages/core/testing/src/test_bed.ts:389:17)                                                              
     at TestBedViewEngine.Object.<anonymous>.TestBedViewEngine.createComponent (../../packages/core/testing/src/test_bed.ts:592:10)                                                            
     at Function.Object.<anonymous>.TestBedViewEngine.createComponent (../../packages/core/testing/src/test_bed.ts:241:36)                                                                     
     at src/app/app.component.spec.ts:24:29                                                                                                                                                    
                                                                                                                                                                                               
 ● AppComponent › should render title                                                                                                                                                          
                                                                                                                                                                                               
   This test module uses the component ReproLibComponent which is using a "templateUrl" or "styleUrls", but they were never compiled. Please call "TestBed.compileComponents" before your test.
                                                                                                                                                                                               
     at TestBedViewEngine.Object.<anonymous>.TestBedViewEngine._initIfNeeded (../../packages/core/testing/src/test_bed.ts:389:17)                                                              
     at TestBedViewEngine.Object.<anonymous>.TestBedViewEngine.createComponent (../../packages/core/testing/src/test_bed.ts:592:10)                                                            
     at Function.Object.<anonymous>.TestBedViewEngine.createComponent (../../packages/core/testing/src/test_bed.ts:241:36)                                                                     
     at src/app/app.component.spec.ts:30:29                                                                                                                                                    


```
