# Blum
Blum is a telegram airdrop clicker game, which in its latest update has become very complicated by using worker and web assembly and mixing JavaScript codes, writing an automatic robot and playing the game by the codes. I was able to crack it by reverse engineering it and figure out and calculate the final payload of the game score request. \
My referral link is [HERE](https://t.me/BlumCryptoBot/app?startapp=ref_qFCbXAVHQj).

![reverse engineering of blum](https://github.com/user-attachments/assets/22be8410-b89f-43fc-8aa6-26bde9b18962)

# ~~A big or maybe small but important problem!~~
~~So I have done the basic logic and complexity of the work. But still the presence of a hidden bug causes us to receive an `Unprocessable Entity` error instead of an `OK` response. \
I have shared the work so far here so that maybe other friends can find the problem and we can complete it gradually.
If you find the problem and fix it, please create a pull request. \
I hope we have a pleasant cooperation.~~

**Update: Fixed!**

# Description of files
- The `blum_wasm.wasm` file is required and intact.
- The `blum_worker.mjs` file is the core of the game and the main codes that communicate with the worker and web assembly. I cracked it and it's posted here with the changes.
- The `blum.mjs` file shows a practical example of how to execute functions and the order of operations. \
**Note:** Since this is a minimal example to demonstrate functionality, its headers are not complete, which you may need to complete in your application to reduce risk.

# Run
At the beginning of the `blum.mjs` file, enter the value of the variables:
- `token`: You can find it in the header of one of the requests. (_My assumption is that you are a professional and you know about this (:_ )
- `delay`: Delay between game start and claim in seconds.
- `cloverClicks`: Number of clicks on clovers
- `freezeClicks`: Number of clicks on freezes
- `bombClicks`: Number of clicks on bombs

And finally run by nodejs:
```bash
node blum.mjs
```

# Sample output:
![sample output of blum bot](https://github.com/user-attachments/assets/7078c3a6-30d4-4fe8-b433-be1df2d3a2cb)

# Caution
You are responsible for the possible risks of using these scripts, such as getting banned.

# Donation
If this project was useful for you and you are willing, you can make me happy by giving a Star at the top of this GitHub page. Also this is my wallet address for Donate:

USDT (TRC20): `TEHjxGqu5Y2ExKBWzArBJEmrtzz3mgV5Hb` \
TON: `UQAzK0qhttfz1kte3auTXGqVeRul0SyFaCZORFyV1WmYlZQj`
