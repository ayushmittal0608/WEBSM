import psutil

# Get disk usage statistics
disk_usage = psutil.disk_usage('/')

# Total size of the disk in bytes
total_disk_size = disk_usage.total

# Used disk space in bytes
used_disk_space = disk_usage.used

# Free disk space in bytes
free_disk_space = disk_usage.free

# Percentage of used disk space
used_disk_percentage = disk_usage.percent

print("Total Disk Size:", total_disk_size)
print("Used Disk Space:", used_disk_space)
print("Free Disk Space:", free_disk_space)
print("Used Disk Percentage:", used_disk_percentage)
