def cave_adventure():
    print("You are at the enterence of the cave. Inside it's dark and spooky")
    while True:
        action = input("What do you want to do? (go inside/ run away): ")
        if(action == 'go inside'):
            print("You walked into the cave. Its really dark")
            action = input("You see two paths. Which one would you take? (left/right): ")
            if action == 'left':
                print("You walked down the left path, you found a treasure chest!!!")
                action = input("DO YOU WANT TO OPEN IT?: (yes/no): ")
                if action == 'yes':
                    print("You found a golden crown!!!! You win!!!!!!!!")
                    break
                elif action == 'no':
                    print("You left the treasure behind and walked away, You lost :<")
                    break
            elif action == 'right':
                print("You walked down the right path, a giant snake appears!!!")
                action = input("Do you want too fight it? (yes/no): ")
                if action == 'yes':
                    print("You defeated the snake and fund a pile of gold. You WIN!!!!!!!!")
                    break
                elif action == 'no':
                    print("You ran away from snake. You lose :<")
                    break
        elif action == 'run away':
            print("You ran away from the cave. You lose :<")
            break
cave_adventure()