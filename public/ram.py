import psutil

# Get the total physical memory (RAM) in bytes
total_memory = psutil.virtual_memory().total

# Get the available physical memory (RAM) in bytes
available_memory = psutil.virtual_memory().available

# Get the used physical memory (RAM) in bytes
used_memory = psutil.virtual_memory().used

# Get the percentage of used physical memory (RAM)
used_memory_percentage = psutil.virtual_memory().percent

print("Total Memory:", total_memory)
print("Available Memory:", available_memory)
print("Used Memory:", used_memory)
print("Used Memory Percentage:", used_memory_percentage)
