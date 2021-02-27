import json
import os
import csv
data = dict()
files = os.listdir("data")
arr=[]
c= 1
for f in range(1,51):
    temp = json.load(open(f"data\\{f}.json", encoding="utf8"))
    for t in temp["tracks"]:
        arr.append(t["album"]["images"][0]["url"])
    
with open("images.csv","w") as f:
    for a in arr:
        f.write(a)
        f.write("\n")  
print(arr)