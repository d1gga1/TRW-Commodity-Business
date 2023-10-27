from pdf2image import convert_from_path

# Convert the first page of the PDF to an image (JPEG)
images = convert_from_path('', first_page=1, last_page=1)
images[0].save('pdf_page.jpg', 'JPEG')
