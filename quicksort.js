
  
  const partition = (arr, low, high) => {
    let q = low
    let i
    for (i = low; i < high; i++) {
      if (arr[i] < arr[high]) {
        swap(arr, i, q)
        q++
      }
    }
    swap(arr, i, q)
    return q
  }
  
  const quickSort = (arr, low, high) => {
    if (low === undefined) low = 0
    if (high === undefined) high = arr.length - 1
    if (low < high) {
      const pivot = partition(arr, low, high)
      quickSort(arr, low, pivot - 1)
      quickSort(arr, pivot + 1, high)
      return arr
    }
  }
  let ordered_list, random_list
  do {
    ordered_list = new Array(500).fill(0).map((_, i) => i)
    random_list = shuffle(ordered_list)
  
    quickSort(random_list)
  } while (JSON.stringify(ordered_list) === JSON.stringify(random_list))
  