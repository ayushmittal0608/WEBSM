import requests
import time

websites = [
    "http://localhost:1000",  # Replace with your local website URLs
    "http://localhost:2000",
    "http://localhost:3000"
]

def check_website(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print(f"{url} is up and running.")
        else:
            print(f"WARNING: {url} returned status code {response.status_code}.")
    except requests.exceptions.RequestException as e:
        print(f"ERROR: Failed to connect to {url}. {e}")

def monitor_websites():
    while True:
        for website in websites:
            check_website(website)
        time.sleep(60)  # Check every 60 seconds

if __name__ == "__main__":
    monitor_websites()
