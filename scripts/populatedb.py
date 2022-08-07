#!/usr/bin/env python

import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()
user = os.environ.get("KARA_DB_USER")
pw = os.environ.get("KARA_DB_PW")
host = os.environ.get("KARA_DB_HOST")

# cnx = mysql.connector.connect(
#     user=user,
#     password=pw,
#     host=host,
#     database="karaparetto",
#     ssl_mode="VERIFY_IDENTITY",
#     ssl={"ca": "/etc/ssl/cert.pem"},
# )

# dev branch
cnx = mysql.connector.connect(
    user="root", password="", host="127.0.0.1", port="3309", database="karaparetto"
)

cursor = cnx.cursor()

ins_val = "INSERT INTO Color " "(hex, r, g, b) " "VALUES(%s, %s, %s, %s)"


def check_hex_value(hex: str):
    if len(hex) < 2:
        return "0" + hex
    return hex


for i in range(0, 256):
    for j in range(0, 256):
        for k in range(0, 256):
            r = check_hex_value(hex(i)[2:])
            g = check_hex_value(hex(j)[2:])
            b = check_hex_value(hex(k)[2:])
            val = f"{r+g+b}"
            data = (val, i, j, k)
            print(val)
            cursor.execute(ins_val, data)
        print("Committing transaction ...")
        cnx.commit()

print("Closing connection ...")
cursor.close()
cnx.close()
