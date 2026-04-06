import urllib.request

url = "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
urllib.request.urlretrieve(url, "pointillism/static/test.jpg")
