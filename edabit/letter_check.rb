# Create a function that accepts an array of two strings and checks if the letters in the second string are present in the first string.

# Examples
# letter_check(["trances", "nectar"]) ➞ true

# letter_check(["compadres", "DRAPES"]) ➞ true

# letter_check(["parses", "parsecs"]) ➞ false
# Notes
# Function should not be case sensitive (as indicated in the second example).
# Both strings are presented as a single argument in the form of an array.
# Bonus if you can do this without RegEx.

def letter_check(arr)
    arr.each { |i| i.upcase }
    if arr[0].length > arr[1].length
        long = arr[0].split("")
        short = arr[1].split("") 
    else
        long = arr[1].split("")
        short = arr[0].split("") 
    end
    flag = false
    long.map { |c| short.include?(c) ? flag = true : flag = false }
    long.map { |c| puts short.include?(c) }
    return flag
end

puts letter_check(["trances", "nectars"]) 
# puts letter_check(["compadres", "DRAPES"]) 
# puts letter_check(["dog", "god"])
# puts letter_check(["aaaa", "gods"])
# puts letter_check(["dogsytr", "gods"])
# puts letter_check(["dogs", "godsfrew"])
# puts letter_check(["cats", "scAt"])