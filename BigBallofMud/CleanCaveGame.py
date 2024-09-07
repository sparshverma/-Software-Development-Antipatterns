class Adventure:
    def __init__(self):
        self.win = False
    def ask(self,message,option):
        while True:
            action = input(message)
            if action in option:
                return action
    def start(self):
        print("You are at the enterence of the cave. Inside it's dark and spooky")
        action = self.ask("What do you want to do? (go inside/ run away): ", ['go inside', 'run away'])
        if action == 'go inside':
            self.go_inside()
        else:
            print("You ran away from the cave. You lose :<")
    def go_inside(self):
        print("You walked into the cave. Its really dark")
        action = self.ask("You see two paths. Which one would you take? (left/right): ", ['left', 'right'])
        if action == 'left':
            self.left_path()
        else:
            self.right_path()
    def left_path(self):
        print("You walked down the left path, you found a treasure chest!!!")
        action = self.ask("DO YOU WANT TO OPEN IT?: (yes/no): ", ['yes', 'no'])
        if action == 'yes':
            print("You found a golden crown!!!! You win!!!!!!!!")
            self.win = True
        elif action == 'no':
            print("You left the treasure behind and walked away, You lost :<")
    def right_path(self):
        print("You walked down the right path, a giant snake appears!!!")
        action = self.ask("Do you want too fight it? (yes/no): ", ['yes', 'no'])
        if action == 'yes':
            print("You defeated the snake and fund a pile of gold. You WIN!!!!!!!!")
            self.win = True
        elif action == 'no':
            print("You ran away from snake. You lose :<")

adventure = Adventure()
adventure.start()