#!/bin/bash

# Date Changer
grep -ilr --exclude-dir=.git --exclude=revar.sh '[DATE]' * | xargs -i@ sed -i 's/\[DATE\]/February 19, 2010/g' @

# Version Changer
grep -ilr --exclude-dir=.git --exclude=revar.sh '[VERSION]' * | xargs -i@ sed -i 's/\[DATE\]/1.3/g' @
