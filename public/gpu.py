import GPUtil

# Get list of available GPUs
gpus = GPUtil.getGPUs()

if gpus:
    for gpu in gpus:
        print("GPU ID:", gpu.id)
        print("GPU Name:", gpu.name)
        print("GPU Memory Total:", gpu.memoryTotal)
        print("GPU Memory Used:", gpu.memoryUsed)
        print("GPU Memory Free:", gpu.memoryFree)
        print("GPU Percentage:", gpu.load * 100)
        print()
else:
    print("No GPUs found on this machine.")
