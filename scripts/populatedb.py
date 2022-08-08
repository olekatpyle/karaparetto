#!/usr/bin/env python

import mysql.connector
from mysql.connector import Error
import os
from dotenv import load_dotenv


load_dotenv()

print("Connecting to database ...")
cnx = mysql.connector.connect(
    user=os.getenv("KARA_USER"),
    password=os.getenv("KARA_PASSWORD"),
    host=os.getenv("KARA_HOST"),
    database=os.getenv("KARA_DATABASE"),
    ssl_ca=os.getenv("SSL_CERT"),
)

# # dev branch
# cnx = mysql.connector.connect(
#     user="root", password="", host="127.0.0.1", port="3309", database="karaparetto"
# )

ins_val = "INSERT INTO Color " "(hex, r, g, b) " "VALUES(%s, %s, %s, %s)"


def check_hex_value(hex: str):
    if len(hex) < 2:
        return "0" + hex
    return hex


try:
    if cnx.is_connected():
        cursor = cnx.cursor()
    cursor.execute("select @@version ")
    version = cursor.fetchone()
    if version:
        print("Running version: ", version)
        for i in range(15, 128):
            for j in range(161, 256):
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
    else:
        print("Not connected.")

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    print("Closing connection ...")
    cursor.close()
    cnx.close()
