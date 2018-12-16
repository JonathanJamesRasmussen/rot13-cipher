# ROT13 Cipher Algorithm
## Description
This algorithm will take in a string of any length (all uppercase) and then either encode it using an ROT13 cipher, which is a specific case of a Caesar cipher, or decipher an already ROT13 encoded string.  ROT13 encoding is done by shifting each letter by 13 places, and this was implemented by using ASCII code values.  

## Usage
This algorithm is covered under the MIT license, so it is free to use under any circumstance as long as a copy of the license is added to wherever you decide to use the code.

## Instructions
After copying the JavaScript function into your environment, call the function - `rot13('ENCODE THIS')`.  This cipher will only work on capitalized letters, so make sure that whatever you want encoded is capitalized.  You can pass special characters into this function, they just won't be encoded.