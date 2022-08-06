#!/usr/bin/env python

import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()
pw = os.environ.get("MYSQL_PW")

cnx = mysql.connector.connect(
    user="root", password=pw, host="127.0.0.1", port="3309", database="karaparetto"
)
cursor = cnx.cursor()

add_color = "INSERT INTO Color " "(color) " "VALUES(%s)"


def check_hex_value(hex: str):
    if len(hex) < 2:
        return "0" + hex
    return hex


# 40 1 191
# 51 100 191
for i in range(51, 192):
    for j in range(101, 192):
        for k in range(0, 192):
            r = check_hex_value(hex(i)[2:])
            g = check_hex_value(hex(j)[2:])
            b = check_hex_value(hex(k)[2:])

            val = [f"#{r+g+b}"]
            print(val)
            cursor.execute(add_color, val)
        print("Committing transaction ...")
        cnx.commit()

print("Closing connection ...")
cursor.close()
cnx.close()
