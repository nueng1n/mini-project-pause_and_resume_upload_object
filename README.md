# mini_project_pause_and_resume_upload_object


![upload process](https://user-images.githubusercontent.com/115057360/194010461-ed9312ce-49a9-4da0-8d4a-563847f050d5.jpg)
*upload process*

-------------------------------------------------------------------------------------------------------
![resume upload process](https://user-images.githubusercontent.com/115057360/194010446-39269c5e-fc92-4460-ac73-af4d9b65d862.jpg)
*resume process*

มินิโปรเจคนี้ สร้างเพราะทดลองวิธีการ upload ที่รองรับการ cencel หรือ ขาดช่วงของ connecttion ฝั่ง client ให้สามารถ resume ข้อมูลไม่จำเป็นต้องส่งข้อมูลชุดใหม่ทั้งหมด 

endpoint | method | description | 
--- | --- | --- |
/status | GET | check server status | 
/memory_db | GET | show chuck data | 
/resume_position | GET | get position for resume upload | 
/upload_request | POST | add hash to memory_db | 
/upload | POST | upload data | 


STEP

1.node server.js
2.node client_upload.js
3.wait aroud 3 second and ctrl+c (terminate) upload process
4.node client_resume_upload.js 

COMPLETE MECHANISM

![image](https://user-images.githubusercontent.com/115057360/194017892-54cbb7ec-1758-4a9d-87c0-96586f350e22.png) *step 1*

![image](https://user-images.githubusercontent.com/115057360/194018694-6428a759-4993-4dfc-aaed-4e19030ea0a0.png) *step 2 and 3*

![output2](https://user-images.githubusercontent.com/115057360/194020086-4719c11d-657f-40db-9cc4-d34aee44d6f5.gif) *step 4*



