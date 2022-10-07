def getCombinationsRec(ar):
    if len(ar) == 0:
        return [[]]

    firstEl = ar.pop(0)
    rest = ar
    # print("getCombinations.py::7 firstEl, ar ->", firstEl, ar)

    # return getCombinations(rest)
    combWithoutFirst = getCombinationsRec(rest)
    combWithFirst = []
    # print("combination.py::10 ", combWithoutFirst)

    for comb in combWithoutFirst:
        newCombWithFirst = [*comb, firstEl]
        combWithFirst.append(newCombWithFirst)

    # print("getCombinations.py::17 combWithFirst", combWithFirst)

    # print("combination ", len(combWithoutFirst + combWithFirst), combWithFirst + combWithoutFirst)
    return combWithoutFirst + combWithFirst


r = getCombinationsRec(list("ABC"))
print("combination.py:: getCombinationsRec -> ", len(r), r if len(r) else "")
# for c in r:
#     print("El:",c)

# r = getCombinationsRec(list("ABC"))
# print("combination.py::",len(r), r if len(r) else "")
#
# r = getCombinationsRec(list("ABC"))
# print("combination.py::",len(r), r if len(r) else "")

# ----------------------------------------------
# --- Not working ------------------------------

# def getCombinations(arr):
#     pass
#     # st_arr = []
#     #
#     # for i in range(len(arr) - 1, -1, -1):  # ABC -> range(2,-1,-1) = i-> (2 1 0)
#     #     for j in range(len(st_arr)):  # 0
#     #         print("getCombinations.py::6 i, j", i, j)
#     #         st_arr.append(arr[i] + st_arr[j])
#     #     st_arr.append(arr[i])
#     #
#     # st_arr.append('')
#     # return st_arr
#
# # r = getCombinations(list("ABCD"))
# # print("combination.py:: getCombinations -> ", len(r), r if len(r) else "")
#
#
# # for c in r:
# #     print("El:", c)
#
