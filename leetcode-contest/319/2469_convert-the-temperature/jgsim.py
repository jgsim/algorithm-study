# 2469. Convert the Temperature
# Eash
# https://leetcode.com/contest/weekly-contest-319/problems/convert-the-temperature/

from typing import List

class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        kelvin = celsius + 273.15
        fahrenheit = celsius * 1.8 + 32
        return [kelvin, fahrenheit]