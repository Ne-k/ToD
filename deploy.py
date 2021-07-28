#!/usr/bin/env python3
import os
import sys

sharding = input("Start in sharded mode? (Y/n)")

if sharding == "n":
    print("Starting in non-sharded mode...")
    os.system("node ToD.js")
else:
    print("Starting in sharded mode...")
    os.system("node shards.js")