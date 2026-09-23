import os
from rembg import remove, new_session
from PIL import Image

input_path = "public/images/doctor.jpg"
output_path = "public/images/doctor-cutout.png"

print("Generating precision 3D cutout with u2netp...")
session = new_session("u2netp")
with open(input_path, "rb") as inp:
    input_data = inp.read()
    output_data = remove(input_data, session=session)
    with open(output_path, "wb") as out:
        out.write(output_data)

print("Cutout saved successfully to:", output_path)
