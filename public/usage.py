import psutil
import GPUtil
import requests
import matplotlib.pyplot as plt

# URLs of the websites running on different localhosts
urls = [
    "http://localhost:1000",
    "http://localhost:2000",
    "http://localhost:3000"
]

# Function to fetch system information
def get_system_info():
    # CPU Usage
    cpu_usage = psutil.cpu_percent(interval=1)
    
    #Network Usage
    network_usage = psutil.net_io_counters().bytes_sent + psutil.net_io_counters().bytes_recv
    # RAM Usage
    ram_usage = psutil.virtual_memory().percent
    
    # Disk Usage
    disk_usage = psutil.disk_usage('/')
    disk_usage_percent = disk_usage.percent

    return cpu_usage, network_usage, ram_usage, disk_usage_percent

# Function to fetch information from a given URL
def fetch_info(url):
    try:
        response = requests.get(url)
        if response.status_code == 200:
            return response.text
        else:
            return f"Failed to fetch data from {url}. Status code: {response.status_code}"
    except Exception as e:
        return f"An error occurred while fetching data from {url}: {str(e)}"

# Fetch system information
cpu_usage, network_usage, ram_usage, disk_usage_percent = get_system_info()

# Fetch information from each URL
websites_info = []
for url in urls:
    websites_info.append(fetch_info(url))

# Plotting
fig, axs = plt.subplots(2, 2, figsize=(12, 8))

# CPU Usage
axs[0, 0].bar(range(len(urls)), [cpu_usage] * len(urls), color='blue')
axs[0, 0].set_xticks(range(len(urls)))
axs[0, 0].set_xticklabels(["Website 1", "Website 2", "Website 3"])
axs[0, 0].set_ylabel("CPU Usage (%)")
axs[0, 0].set_title("CPU Usage")

# GPU Usage
axs[0, 1].bar(range(len(urls)), [network_usage] * len(urls), color='green')
axs[0, 1].set_xticks(range(len(urls)))
axs[0, 1].set_xticklabels(["Website 1", "Website 2", "Website 3"])
axs[0, 1].set_ylabel("Network Usage (%)")
axs[0, 1].set_title("Network Usage")

# RAM Usage
axs[1, 0].bar(range(len(urls)), [ram_usage] * len(urls), color='orange')
axs[1, 0].set_xticks(range(len(urls)))
axs[1, 0].set_xticklabels(["Website 1", "Website 2", "Website 3"])
axs[1, 0].set_ylabel("RAM Usage (%)")
axs[1, 0].set_title("RAM Usage")

# Disk Usage
axs[1, 1].bar(range(len(urls)), [disk_usage_percent] * len(urls), color='red')
axs[1, 1].set_xticks(range(len(urls)))
axs[1, 1].set_xticklabels(["Website 1", "Website 2", "Website 3"])
axs[1, 1].set_ylabel("Disk Usage (%)")
axs[1, 1].set_title("Disk Usage")

plt.tight_layout()
plt.show()
