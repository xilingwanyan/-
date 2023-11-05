local lp=game.Players.LocalPlayer
local mouse = lp:GetMouse()
local CurrentSlot = game.Players.LocalPlayer:WaitForChild("CurrentSaveSlot").Value
local ScriptLoadOrSave = false
local CurrentlySavingOrLoading = game.Players.LocalPlayer:WaitForChild("CurrentlySavingOrLoading")
local bai = {
 autoaxedupe=false,
    cuttreeselect="Generic",
    axedupepick=nil,
    autodupe=false,
    dxmz="",
slot=-1,
zlwjia="",
zix=1,
zlz=3,
bringamount=1,
bringtree=false,
waterwalk=false,
awaysday=false,
awaysdnight=false,
nofog=false,
cswjiail=nil,
itemset=nil,
autocsdx=nil,
autobuystop=false,
autobuyamount=1
    }

        local function notify(Title,Text,Duration) -- Sends Notification in the bottom right of the screen
        game.StarterGui:SetCore("SendNotification", {
            Title = Title;
            Text = Text;
            Icon = nil;
            Duration = Duration
        })
    end
function Dupeaxe()
      lp.Character.Humanoid:UnequipTools()
    local oldpos = lp.Character.HumanoidRootPart.CFrame
    for i,v in pairs(game:service"Players".LocalPlayer.Backpack:GetChildren()) do
       if v.Name == "Tool" then
           game:GetService("ReplicatedStorage").Interaction.ClientInteracted:FireServer(v,"Drop tool",game:service"Players".LocalPlayer.Character.Torso.CFrame * CFrame.new(0,5,0))
       end
   end
   game:service"Players".LocalPlayer.Character.Head:Destroy()
   wait(6)
   lp.Character.HumanoidRootPart.CFrame=oldpos
end
local Vehicle
function cartp(cframe)
    Vehicle = lp.Character.Humanoid.SeatPart.Parent
    spawn(function()
        for i = 1, 3 do
            task.wait()
            Vehicle:SetPrimaryPartCFrame(cframe)
        end
    end)
end
  function ItemStackeraxe(ItemType, XAxis, ZAxis) 
    local Player = game.Players.LocalPlayer.Character.HumanoidRootPart.Position - Vector3.new(0, 3.5, 0)
    local Items = {}
    
    for i, v in pairs(game:GetService("Workspace").PlayerModels:GetChildren()) do 
        if v:FindFirstChild("Owner") and tostring(v.Owner.Value) ==bai.zlwjia 
         then if (
                  v:FindFirstChild "DraggableItem" and tostring(v.DraggableItem.Parent) == ItemType) 
                 then table
                      .
                      insert(Items, v)
              end
          end
      end
      local Count = 0
      for Y = 1, math.ceil(#Items / (XAxis * ZAxis)) do for X = 1, XAxis do for Z = 1, ZAxis do Count = Count
                      + 1
                  game:GetService("ReplicatedStorage").PlaceStructure.ClientPlacedStructure:FireServer(nil,
                      CFrame.new(X * Items[1].Main.Size.X, Y * Items[1].Main.Size.Y, Z * Items[1].Main.Size.Z) + Player
                      ,
                      game.Players.LocalPlayer, nil, Items[Count], true)
              end
          end
      end
  end
 function ItemStackerbox(ItemType, XAxis, ZAxis) 
    local Player = game.Players.LocalPlayer.Character.HumanoidRootPart.Position - Vector3.new(0, 4, 0)
    local Items = {}
    
    for i, v in pairs(game:GetService("Workspace").PlayerModels:GetChildren()) do 
        if v:FindFirstChild("Owner") and tostring(v.Owner.Value) ==bai.zlwjia 
         then if (
            v:FindFirstChild("PurchasedBoxItemName") and tostring(v.PurchasedBoxItemName.Value)  == ItemType) 
                 then table
                      .
                      insert(Items, v)
              end
          end
      end
      local Count = 0
      for Y = 1, math.ceil(#Items / (XAxis * ZAxis)) do for X = 1, XAxis do for Z = 1, ZAxis do Count = Count
                      + 1
                  game:GetService("ReplicatedStorage").PlaceStructure.ClientPlacedStructure:FireServer(nil,
                      CFrame.new(X * Items[1].Main.Size.X, Y * Items[1].Main.Size.Y, Z * Items[1].Main.Size.Z) + Player
                      ,
                      game.Players.LocalPlayer, nil, Items[Count], true)
              end
          end
      end
  end
 local function CheckIfSlotAvailable(Slot)
    for a,b in pairs(game.ReplicatedStorage.LoadSaveRequests.GetMetaData:InvokeServer(game.Players.LocalPlayer)) do
        if a == Slot then
            for c,d in pairs(b) do
                if c == "NumSaves" and d ~= 0 then
                    return true
                else
                    return false
                end
            end
        end
    end
end
 
local function CheckSlotNumber() --Checks if the slot number is right
    if bai.slot == "1" or bai.slot == "2" or bai.slot == "3" or bai.slot == "4" or bai.slot == "5" or bai.slot == "6" then
        local SlotNumber = tonumber(bai.slot)
        return SlotNumber
        else return false
    end
end




function toolsta(toolname)
  return require(game.ReplicatedStorage.Purchasables.Tools.AllTools[toolname].AxeClass).new()
end
 
local function table_foreach(table, callback)
  for i=1,#table do
    callback(i, table[i])
  end
end


local function tp(pos)
  if typeof(pos) == "CFrame" then
    lp.Character:SetPrimaryPartCFrame(pos)
  elseif typeof(pos) == "Vector3" then
    lp.Character:MoveTo(pos)
  end
end

function sellwood()
for _, Log in pairs(workspace.LogModels:GetChildren()) do
    if Log.Name:sub(1, 6) == "Loose_" and Log:findFirstChild("Owner") then
        if Log.Owner.Value == game.Players.LocalPlayer then
            for i,v in pairs(Log:GetChildren()) do
                if v.Name=="WoodSection" then
                    spawn(function()
                        for i=1,100 do
                            wait();
							game.ReplicatedStorage.Interaction.ClientRequestOwnership:FireServer(v.WoodSection)
							game.ReplicatedStorage.Interaction.ClientIsDragging:FireServer(v.WoodSection)
                            v.CFrame=CFrame.new(Vector3.new(315, -0.296, 85.791))*CFrame.Angles(math.rad(90),0,0)
                        end
                    end)
                end
            end
            
        end
    end
end
end



local function cutPart (tool,event, treeClass,axestr)
   game:GetService"ReplicatedStorage".Interaction.RemoteProxy:FireServer(event, {
	tool = tool,
	faceVector = Vector3.new(0, 0,-1),
	height =  0.3,
	sectionId = 1,
	hitPoints = axestr,
	cooldown = -14,
	cuttingClass = "Axe"
  })
end
local treeListener = function(treeClass, callback)
  local childAdded
  a= workspace.LogModels.ChildAdded:Connect(function(child)
	local owner = child:WaitForChild("Owner")
	if owner.Value == lp and child.TreeClass.Value == treeClass then
	  a:Disconnect()
	  callback(child)
	end
  end)
end


local getBiggestTree = function(treeClass)
    for _,v in next,workspace:children()do
        if tostring(v)=="TreeRegion"then
            for _,g in next,v:children()do
                if g:FindFirstChild("TreeClass")and tostring(g.TreeClass.Value)==treeClass and g:FindFirstChild("Owner")then 
                    if g.Owner.Value==nil or tostring(g.Owner.Value)==tostring(lp)then 
                        if #g:children() > 5 and g:FindFirstChild("WoodSection")then 
                            for h,j in next,g:children() do 
                                if j:FindFirstChild("ID")and j.ID.Value==1 and j.Size.Y>.5 then 
                                    return j;
                                end;
                            end;
                        end;
                    end;
                end;
            end;
        end;
    end;
    return false;
end
local function  lowerBridge(value)

    if value=="Higher"then
        for _,v in pairs(game.workspace.Bridge.VerticalLiftBridge.Lift:GetChildren()) do
            v.CFrame = v.CFrame + Vector3.new(0, 26, 0)
            end
            
    elseif value=="Lower"then
        for _,v in pairs(game.workspace.Bridge.VerticalLiftBridge.Lift:GetChildren()) do
            v.CFrame = v.CFrame + Vector3.new(0, -26, 0)
            end
    end;
    end
   function modwood()
	local wood
	local Saw
	notify("自动加工", "请点击一颗树", 4)
	local ModTree =	mouse.Button1Up:Connect(function()
		local obj = mouse.Target.Parent
			if not obj:FindFirstChild "RootCut" and obj.Parent.Name == "TreeRegion" then
				return notify("错误!", "这棵树还没有砍!", 3)
			end
			if obj:FindFirstChild "Owner" and obj.Owner.Value == lp and obj:FindFirstChild "WoodSection" then
				wood = obj
			   notify("一键加工", "已选择树!", 3)
			end
			if obj.Name:find("Sawmill")then
					Saw=sawmill;
					notify("白","剧木机已选择",4)
				elseif obj.Parent.Name:find("Sawmill")or obj.Parent:FindFirstChild"BlockageAlert"then 
					Saw=obj.Parent
					notify("白","剧木机已选择",4)
				end;
			end
			)
			repeat
				task.wait(.01)
			until wood and Saw ~= nil
			ModTree:Disconnect()
			ModTree = nil
			local SawC = Saw.Particles.CFrame + Vector3.new(0.7, 0)
			local cu,cw= 0,nil
		   for p, I in next, wood:GetChildren() do
			if I.Name == "WoodSection" then
				if I.ID.Value > cu then
					cu = I.ID.Value
					cw=I
				end
			end
		end
			for p, I in next, wood:GetChildren() do
				if I.Name == "WoodSection" then
					  
					for p, b in next, I.ChildIDs:GetChildren() do
					
						if b.Value ==cu then
							cv = I
						  
						end
					end
				end
			end
			tp(cv.CFrame)
			wait()
		repeat wait()
				game.ReplicatedStorage.Interaction.ClientRequestOwnership:FireServer(cv)
				game:GetService("ReplicatedStorage").Interaction.ClientIsDragging:FireServer(cv)
				firetouchinterest(cv,game.Workspace["Region_Volcano"].Lava.Lava,0);
				firetouchinterest(cv,game.Workspace["Region_Volcano"].Lava.Lava,1);
			until cv:FindFirstChild("LavaFire");
			cv:FindFirstChild("LavaFire"):Destroy();
	tp(cw.CFrame)
	for i=1,20 do
		game.ReplicatedStorage.Interaction.ClientRequestOwnership:FireServer(cw)
				game.ReplicatedStorage.Interaction.ClientIsDragging:FireServer(cw)
				cw.CFrame=SawC
				end
   end
local function bringTree(treeClass)
  lp.Character.Humanoid:UnequipTools()
        local oldPos=lp.Character.HumanoidRootPart.CFrame;
        local tool
        local tool=0
        for i,v in pairs (lp.Backpack:GetChildren()) do
                if v.Name ~= "BlueprintTool"then
                     tool=tool+1
        end
        end
        if tool==0 then
            return 
            notify("白","你需要斧头",4)
        end
     
   
  for i,v in pairs (lp.Backpack:GetChildren()) do
    if  v.Name ~= "BlueprintTool"then

 tool = v
    end
end
 local toolname
for i ,v in pairs (tool:GetChildren()) do
    if v.Name=="ToolName" then
        toolname=v.Value
        
        end
end

local axestr=toolsta(toolname)
if axestr.SpecialTrees and axestr.SpecialTrees[treeClass] then
    for i, v in next, axestr.SpecialTrees[treeClass] do
        axestr[i] = v
    end
  end
  local tree = getBiggestTree(treeClass)
   
  if not tree then
	return notify("白","没有找到树",4)
  end



  
  local treeCut = false
if treeClass=="LoveCave" and axestr.Damage<10000000 then
    return notify("白","你没有合适的斧头去砍这棵树")    end
    if treeClass=="Shine" and axestr.Damage<80000000 then
        return notify("白","你没有合适的斧头去砍这棵树")    end
        if treeClass=="Shine" and axestr.Damage<80000000 then
            return notify("白","你没有合适的斧头去砍这棵树")    end
            if treeClass=="Magma" and axestr.Damage<10000000 then
                return notify("白","你没有合适的斧头去砍这棵树")    end
                if treeClass=="Ice" and axestr.Damage<8000000 then
                    return notify("白","你没有合适的斧头去砍这棵树")    end
                    if treeClass== "Radioactive" and axestr.Damage<10000000 then
                        return notify("白","你没有合适的斧头去砍这棵树")    end
                        if treeClass== "Scale" and axestr.Damage<40000000 then
                            return notify("白","你没有合适的斧头去砍这棵树")    end
                            
                            workspace.Camera.CameraSubject = tree
  treeListener(treeClass, function(tree)
	tree.PrimaryPart = tree:FindFirstChild("WoodSection")
	treeCut = true
wait()
workspace.Camera.CameraSubject = lp.Character
	for i=1,10 do
		game.ReplicatedStorage.Interaction.ClientRequestOwnership:FireServer(tree.WoodSection)
		game.ReplicatedStorage.Interaction.ClientIsDragging:FireServer(tree.WoodSection)

        tree:SetPrimaryPartCFrame(oldPos)
   
game:GetService("RunService").Heartbeat:wait();
end
		
end)
  
  task.wait()
  

    repeat
       

cutPart(tool,tree.Parent.CutEvent, treeClass,axestr.Damage)
     wait()
    until treeCut

	
  end
  local cashierIds = {}
  local connection = game.ReplicatedStorage.NPCDialog.PromptChat.OnClientEvent:connect(function(bu, data)
      if cashierIds[data.Name] == nil then
          cashierIds[data.Name] = data.ID;
      end
  end)
  
  game.ReplicatedStorage.NPCDialog.SetChattingValue:InvokeServer(1)
  spawn(function()
      repeat wait(0.5) until cashierIds["Thom"] ~= nil
      wait(3)
      connection:Disconnect()
      connection = nil
      game.ReplicatedStorage.NPCDialog.SetChattingValue:InvokeServer(0)
  
  end)
  local bt = false;
  
  function finditem(BItem)
      local NameStore,Cashier,CID,StoreItems, Counter
      for _,s in pairs (game.Workspace.Stores:GetChildren()) do
     
          if s.Name~= "LandStore" then
              
             for _,l in pairs (s.ShopItems:GetChildren()) do

          if l.Name==BItem then
          for _,w in pairs (s.ShopItems:GetChildren()) do
              if w.Name=="Bed1" or w.Name=="Seat_Couch" then
                  NameStore = "Corey"
                  Cashier = game.Workspace.Stores.FurnitureStore.Corey
                  StoreItems =l
                  Counter = game.Workspace.Stores.FurnitureStore.Counter.CFrame + Vector3.new(0, .4, 0)

              elseif w.Name=="Sawmill" or w.Name=="Sawmill2" then
                  NameStore = "Thom"
                  Cashier = game.Workspace.Stores.WoodRUs.Thom
                  StoreItems =l
                  Counter = game.Workspace.Stores.WoodRUs.Counter.CFrame + Vector3.new(0, .4, 0)

              elseif w.Name=="Trailer2" or w.Name=="UtilityTruck2" then
                  NameStore = "Jenny"
                  Cashier = game.Workspace.Stores.CarStore.Jenny
                  StoreItems =l
                  Counter = game.Workspace.Stores.CarStore.Counter.CFrame + Vector3.new(0, .4, 0)

              elseif w.Name=="CanOfWorms" or w.Name=="Dynamite" then
                  NameStore = "Bob"
                  Cashier = game.Workspace.Stores.ShackSho.Bob
                  StoreItems =l
                  Counter = game.Workspace.Stores.ShackShop.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="Painting1" or w.Name=="Painting2" then
                  NameStore = "Timothy"
                  Cashier = game.Workspace.Stores.FineArt.Timothy
                  StoreItems =l
                  Counter = game.Workspace.Stores.FineArt.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="GateXOR" or w.Name=="NeonWireOrange" then
                  NameStore = "Lincoln"
                  Cashier = game.Workspace.Stores.LogicStore.Lincoln
                  StoreItems =l
                  Counter = game.Workspace.Stores.LogicStore.Counter.CFrame + Vector3.new(0, .4, 0)
               elseif w.Name=="BeachBall" or w.Name=="Cookie" then
                  NameStore = "Guy"
                  Cashier = game:GetService("Workspace").Stores.SeaSide.Guy
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.SeaSide.Counter.CFrame + Vector3.new(0, .4, 0)
                elseif w.Name=="StrangeMan" or w.Name=="EndtimesChainsaw" then
                  NameStore = "sneakypotato7"
                  Cashier = game:GetService("Workspace").Stores.BlackMarket.sneakypotato7
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.BlackMarket.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="GoldGameCube" or w.Name=="GoldConveyorFunnel" then
                  NameStore = "Todd"
                  Cashier =game:GetService("Workspace").Stores.VIPSHOP.Todd
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.VIPSHOP.Counter.CFrame + Vector3.new(0, .4, 0)
               elseif w.Name=="Playstation" or w.Name=="SawmillGift" then
                  NameStore = "Mr.Bacon"
                  Cashier =game:GetService("Workspace").Stores.MountainSide["Mr.Bacon"]
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.MountainSide.Counter.CFrame + Vector3.new(0, .4, 0)
               elseif w.Name=="MegaConveyorFunnel" or w.Name=="GameCube" then
                  NameStore = "Bloxyway"
                  Cashier =game:GetService("Workspace").Stores.SamsStuff.Bloxyway
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.SamsStuff.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="StorageBox" or w.Name=="StorageBox" then
                  NameStore = "Geck"
                  Cashier =game:GetService("Workspace").Stores.BoatsStore.Geck
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.BoatsStore.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="FireRock" or w.Name=="PotFrost" then
                  NameStore = "OGxOutcast"
                  Cashier =game:GetService("Workspace").Stores.PlanterStore.OGxOutcast
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.PlanterStore.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="LumberCD" or w.Name=="UtilityVolt" then
                  NameStore = "NotPlantomic56"
                  Cashier =game:GetService("Workspace").Stores.TravelingTrader.NotPlantomic56
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.TravelingTrader.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="Eye1" or w.Name=="PumpkinClassic" then
                  NameStore = "Sally"
                  Cashier =game:GetService("Workspace").Stores.SallysSeasonal.Sally
                  StoreItems =l
                  Counter =game:GetService("Workspace").Stores.SallysSeasonal.Counter.CFrame + Vector3.new(0, .4, 0)
              elseif w.Name=="LumberCDDab" or w.Name=="Lemon" then
                  NameStore = "dab529"
                  Cashier =game:GetService("Workspace").Stores.StoneRUs.dab529
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.StoneRUs.Counter.CFrame + Vector3.new(0, .4, 0)
                  elseif w.Name=="LeafCutters" or w.Name=="LeafFurnace" then
                  NameStore = "William"
                  Cashier =game:GetService("Workspace").Stores.AutumnCatalog.William
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.AutumnCatalog.Counter.CFrame + Vector3.new(0, .4, 0)
               elseif w.Name=="AxeIce" or w.Name=="Cocoa" then
                  NameStore = "Cold Guy"
                  Cashier =game:GetService("Workspace").Stores.Igloo["Cold Guy"]
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.Igloo.Counter.CFrame + Vector3.new(0, .4, 0)
               elseif w.Name=="Egg" or w.Name=="HappyBall" then
                  NameStore = "Plantomic56"
                  Cashier =game:GetService("Workspace").Stores.PlantomicsChoice.Plantomic56
                  StoreItems =l
                  Counter = game:GetService("Workspace").Stores.PlantomicsChoice.Counter.CFrame + Vector3.new(0, .4, 0)
                  elseif w.Name=="Wall2Round" or w.Name=="WritableSign" then
                  NameStore = "Manachron"
                  Cashier =game:GetService("Workspace").Stores.FineFinds.Manachron
                  StoreItems =l
                  Counter= game:GetService("Workspace").Stores.FineFinds.Counter.CFrame + Vector3.new(0, .4, 0)
                  elseif w.Name=="SaplingCrate" or w.Name=="Planter2" then
                  NameStore = "Billy"
                  Cashier =game:GetService("Workspace").Stores.SaplingCart.Billy
                  StoreItems =l
                  Counter= game:GetService("Workspace").Stores.SaplingCart.Counter.CFrame + Vector3.new(0, .4, 0)
              
              
              
              
              end
      
          end
          end
    end
          end
     end
if NameStore~=nil then
      return{NameStore,Cashier,cashierIds[Cashier.Name],Counter,StoreItems}
      end
  end
  function autobuyv2(o)

   
	local  item=nil
	local  ltem
	
	item=finditem(o)

	if item==nil then
		notify("白","没有找到商品或者没有刷新，请你等待",4)
		repeat
		    item=finditem(o)
	wait()
			
		until  item~=nil

	end

   ltem=item[5]


    game:GetService("ReplicatedStorage").PlaceStructure.ClientPlacedStructure:FireServer(nil,item[4],lp, nil, ltem, true)	



	game:GetService("ReplicatedStorage").NPCDialog.PlayerChatted:InvokeServer({["Character"] = item[2], ["Name"] =item[1], ["ID"] = tonumber(item[3])}, "ConfirmPurchase")
	


    return o
end

function autobuy(o, r)
	bai.autocsdx = game.Workspace.PlayerModels.ChildAdded:connect(function(v)
	    	  
            game:GetService("ReplicatedStorage").PlaceStructure.ClientPlacedStructure:FireServer(nil,bai.autobuyset,lp, nil, v, true)	

	end)
    for e = 1, r do
		if bai.autobuystop==false then
        autobuyv2(o)
		end
		
    end
	spawn(function()
		wait(1)
	bai.autocsdx:Disconnect();
		bai.autocsdx=nil;
	end)
    return o, r
end
  function tpitems(name)
	local plr = bai.cswjia
	local StealType = name
 
	for i,v in pairs(game.Workspace.PlayerModels:GetChildren()) do
		if v:FindFirstChild("Owner") and tostring(v.Owner.Value) == plr then
			if StealType ~= "TreeClass" then
				if v:FindFirstChild("Type") and tostring(v.Type.Value) == StealType then
					if v.PrimaryPart then
					 game:GetService("ReplicatedStorage").PlaceStructure.ClientPlacedStructure:FireServer(nil,bai.itemset,lp, nil, v, true)	
				end
			end
			else
 
				if v:FindFirstChild("TreeClass") then
				
					spawn(function()			
						for i=1 ,20 do
							game.ReplicatedStorage.Interaction.ClientRequestOwnership:FireServer(v.WoodSection)
							game:GetService("ReplicatedStorage").Interaction.ClientIsDragging:FireServer(v.WoodSection)
							game:GetService("RunService").Stepped:wait();
						end
						v.WoodSection.CFrame=  bai.itemset
						end)
						task.wait()
 
 
				
					end
 
 
 
 
 
			end
		end
 
	end
notfy("白","完成",4)
end

function shuaxinlb(zji)
bai.dropdown={}
if zji==true then
for p, I in next,game.Players:GetChildren() do
table.insert(bai.dropdown, I.Name)
end
else
for p, I in next, game.Players:GetChildren() do
if I ~= lp then
table.insert(bai.dropdown, I.Name)
end
end
end
end
shuaxinlb(true)
local bailib = loadstring(game:HttpGet"https://pastebin.com/raw/DW3eJwe6")()
local win = bailib:new("白--木材大亨2")
local Tab1 = win:Tab("玩家功能", "10882439086")
local Section3 = Tab1:section("玩家")
local Sectioncs = Tab1:section("传送")
local Sectionqccs = Tab1:section("汽车传送")
local Tab = win:Tab("主要功能", "10728953248")
local Section = Tab:section("斧头")
local Section1 = Tab:section("基地")
local Sectionchuanson = Tab:section("传送东西")
local Sectionzhengli = Tab:section("整理")
local Section5 = Tab:section("木头")
local Tab2 = win:Tab("环境", "4626047596")
local Sectionhuanjin = Tab2:section("环境")
local Tab3 = win:Tab("自动购买", "558024189")
local Sectionautobuy = Tab3:section("自动购买V2(测试)",false)
local Sectionautobuy6 = Tab3:section("其他",false)

Section3:Textbox("设置速度","TextBoxfalg","输入数字",function(s)
	
		spawn(function()
while task.wait() do
		lp.Character.Humanoid.WalkSpeed = s
	end
	end)
end)
Section3:Textbox("设置跳跃","TextBoxfalg","输入数字",function(s)
	
		spawn(function()
			while task.wait() do
		game:GetService("Players").LocalPlayer.Character.Humanoid.JumpPower = s
	end
end)
end)
Section3:Textbox("设置高度","TextBoxfalg","输入数字",function(s)
	lp.Character.Humanoid.HipHeight=s
end)
Section3:Button("飞行", function()
	loadstring("\108\111\97\100\115\116\114\105\110\103\40\103\97\109\101\58\72\116\116\112\71\101\116\40\40\39\104\116\116\112\115\58\47\47\103\105\115\116\46\103\105\116\104\117\98\117\115\101\114\99\111\110\116\101\110\116\46\99\111\109\47\109\101\111\122\111\110\101\89\84\47\98\102\48\51\55\100\102\102\57\102\48\97\55\48\48\49\55\51\48\52\100\100\100\54\55\102\100\99\100\51\55\48\47\114\97\119\47\101\49\52\101\55\52\102\52\50\53\98\48\54\48\100\102\53\50\51\51\52\51\99\102\51\48\98\55\56\55\48\55\52\101\98\51\99\53\100\50\47\97\114\99\101\117\115\37\50\53\50\48\120\37\50\53\50\48\102\108\121\37\50\53\50\48\50\37\50\53\50\48\111\98\102\108\117\99\97\116\111\114\39\41\44\116\114\117\101\41\41\40\41\10\10")()
end)
    Sectioncs:Dropdown("传送","Dropdown",{"出生点","木材反斗城","回家","连接逻辑店","土地商店","会员商店","画店","桥对岸","沙滩","火木","雪山","洞穴","码头","黑市","糖果原","雪地入口","盖克斯航运","玻璃冰木入口","云层","山边商品","章鱼哥祭坛","沼泽商店","石头商店","沼泽","冰胡","沙漠","辐射商店","核污染区","种子商人","鲍勃的店","家具店","车店","罗布克斯商店","肯德坤专卖店","秋季商店"}, function(b)
	list = b
	if list == "出生点"then
		tp(CFrame.new(187,3,55))
		
	elseif list == "木材反斗城"then
		tp(CFrame.new(265, 5, 57))
		
	elseif list == "洞穴" then
		
        tp(CFrame.new(3581, -177, 430))
	
	elseif list == "连接逻辑店" then
		tp(CFrame.new(4607, 9, -798))
		
	elseif list == "雪山" then
		tp(CFrame.new(1451.66248, 412.208405, 3183.47607))
	
	elseif list == "土地商店" then
		tp(CFrame.new(258, 5, -99))
		
	elseif list == "画店" then
		tp(CFrame.new(5207, -156, 719))
		
	elseif list == "火木" then
		tp(CFrame.new(-1585, 625, 1140))
	
	elseif list == "沙滩" then
		tp(CFrame.new(2549, 5, -42))
	
	elseif list == "桥对岸"then
		tp(CFrame.new(109,5,-1166))
		
	elseif list == "会员商店" then
		tp(CFrame.new(907,4,-92))
		
	elseif list == "码头" then
		tp(CFrame.new(1122,1,-203))
		
	elseif list == "黑市" then
		tp(CFrame.new(-22,61,1377))
		
	elseif list == "糖果原" then
		tp(CFrame.new(-561,272,2312))
		
	elseif list == "雪地入口"then
		tp(CFrame.new(888,61,1188))
	
	elseif list == "盖克斯航运"then
		tp(CFrame.new(1894,-2,1581))
	
	elseif list == "玻璃冰木入口" then
		tp(CFrame.new(1929,256,2918))
		
	elseif list == "云层" then
		tp(CFrame.new(2073,495,2967))
	
	elseif list == "山边商品"then
		tp(CFrame.new(-640,160,374))
		
	elseif list == "章鱼哥祭坛" then
		tp(CFrame.new(-1622,196,941))
		
	elseif list == "沼泽商店" then
		tp(CFrame.new(-1274,133,-1443))
		
	elseif list == "沼泽" then
		tp(CFrame.new(-999,133,-1191))
	
	elseif list == "石头商店" then
		tp(CFrame.new(-2387,302,-1899))
		
	elseif list == "冰胡" then
		tp(CFrame.new(-2149,321,743))
		
	elseif list == "沙漠" then
		tp(CFrame.new(-612,46,-3169))
		
	elseif list == "辐射商店" then
		tp(CFrame.new(172,12,-2627))
		
	elseif list == "核污染区" then
		tp(CFrame.new(207,15,-2752))
		
	elseif list == "种子商人" then
		tp(CFrame.new(-24,18,-2684))
		
	elseif list == "鲍勃的店" then
		tp(CFrame.new(261,9,-2541))
		
	elseif list == "家具店" then
		tp(CFrame.new(492,4,-1723))
	
	elseif list == "车店" then
		tp(CFrame.new(512,4,-1459))
	
	elseif list == "罗布克斯商店" then
		tp(CFrame.new(652,4,-1589))
		
	elseif list == "肯德坤专卖店" then
		tp(CFrame.new(65,4,-455))
	
	elseif list == "秋季商店" then
		tp(CFrame.new(6004,4,33))
    elseif list == "回家" then
		for i,v in pairs(game.Workspace.Properties:GetChildren()) do
			if v.Owner.Value == lp then
				tp(v.OriginSquare.CFrame + Vector3.new(0,10,0)) 
			end
			end
		end
	
	
	

end)

    Sectionqccs:Dropdown("汽车传送","Dropdown",{"出生点","回家","木材反斗城","连接逻辑店","土地商店","会员商店","画店","桥对岸","沙滩","火木","雪山","洞穴","码头","黑市","糖果原","雪地入口","盖克斯航运","玻璃冰木入口","云层","山边商品","章鱼哥祭坛","沼泽商店","石头商店","沼泽","冰胡","沙漠","辐射商店","核污染区","种子商人","鲍勃的店","家具店","车店","罗布克斯商店","肯德坤专卖店","秋季商店"}, function(v)
	list = v
	if list == "出生点"then
		
		cartp(CFrame.new(187,5,55))

	elseif list == "木材反斗城"then
		
		cartp(CFrame.new(245, 5, 57))

	elseif list == "洞穴" then
		
		cartp(CFrame.new(3581, -177, 430))

	elseif list == "连接逻辑店" then
		
		cartp(CFrame.new(4607, 9, -740))

	elseif list == "雪山" then
		
		cartp(CFrame.new(1451.66248, 412.208405, 3183.47607))

	elseif list == "土地商店" then
		
		cartp(CFrame.new(230, 5, -99))

	elseif list == "画店" then
		
		cartp(CFrame.new(5207, -156, 719))

	elseif list == "火木" then
		
		cartp(CFrame.new(-1585, 625, 1140))

	elseif list == "沙滩" then
		
		cartp(CFrame.new(2549, 5, -42))

	elseif list == "桥对岸"then
		
		cartp(CFrame.new(109,5,-1166))

	elseif list == "会员商店" then
		
		cartp(CFrame.new(907,4,-115))

	elseif list == "码头" then
		
		cartp(CFrame.new(1122,1,-203))

	elseif list == "黑市" then
		
		cartp(CFrame.new(-15,61,1365))

	elseif list == "糖果原" then
		
		cartp(CFrame.new(-561,272,2312))

	elseif list == "雪地入口"then
		
		cartp(CFrame.new(888,61,1188))

	elseif list == "盖克斯航运"then
		
		cartp(CFrame.new(1894,-2,1581))

	elseif list == "玻璃冰木入口" then
		
		cartp(CFrame.new(1929,256,2918))

	elseif list == "云层" then
		
		cartp(CFrame.new(2060,495,2967))

	elseif list == "山边商品"then
		
		cartp(CFrame.new(-640,160,374))

	elseif list == "章鱼哥祭坛" then
		
		cartp(CFrame.new(-1622,196,941))

	elseif list == "沼泽商店" then
		
		cartp(CFrame.new(-1274,133,-1443))

	elseif list == "沼泽" then
		
		cartp(CFrame.new(-999,133,-1191))

	elseif list == "石头商店" then
		
		cartp(CFrame.new(-2395,302,-1899))

	elseif list == "冰胡" then
		
		cartp(CFrame.new(-2149,321,743))

	elseif list == "沙漠" then
		
		cartp(CFrame.new(-612,46,-3169))

	elseif list == "辐射商店" then
		
		cartp(CFrame.new(172,12,-2627))

	elseif list == "核污染区" then
		
		cartp(CFrame.new(207,15,-2752))

	elseif list == "种子商人" then
		
		cartp(CFrame.new(-15,18,-2680))

	elseif list == "鲍勃的店" then
		
		cartp(CFrame.new(245,9,-2541))

	elseif list == "家具店" then
		
		cartp(CFrame.new(490,4,-1690))

	elseif list == "车店" then
		
		cartp(CFrame.new(512,4,-1490))

	elseif list == "罗布克斯商店" then
		
		cartp(CFrame.new(652,4,-1565))

	elseif list == "肯德坤专卖店" then
		
		cartp(CFrame.new(100,4,-455))

	elseif list == "秋季商店" then
		
		cartp(CFrame.new(6004,4,33))
    elseif list == "回家" then
		for i,v in pairs(game.Workspace.Properties:GetChildren()) do
			if v.Owner.Value == lp then
				cartp(v.OriginSquare.CFrame + Vector3.new(0,10,0)) 
			end
			end
		end
	




end)

Section:Button("复制斧头", function()
    Dupeaxe()
end)
Section:Button("扔掉所有斧头", function()
    for i,v in pairs(game:service"Players".LocalPlayer.Backpack:GetChildren()) do
        if v.Name == "Tool" then
            game:GetService("ReplicatedStorage").Interaction.ClientInteracted:FireServer(v,"Drop tool",game:service"Players".LocalPlayer.Character.Torso.CFrame * CFrame.new(0,5,0))
        end
    end
end)
Section:Button("捡斧头", function()
    for a,b in pairs(workspace.PlayerModels:GetChildren()) do
        if b:FindFirstChild("Owner") and b.Owner.Value == lp then
          if b:FindFirstChild("Type") and b.Type.Value == "Tool" then
          game:GetService("ReplicatedStorage").Interaction.ClientInteracted:FireServer(b,"Pick up tool")	
          task.wait()
        
          end
        end
          end
end)

Section:Toggle("自动复制斧头","Toggleflag",false,function(state)
	if state then
		bai.autoaxedupe=true
        
	while bai.autoaxedupe ==true do
  
        Dupeaxe()
        
end
else 
    bai.autoaxedupe=false
end
end)

Section1:Textbox("加载基地数字","TextBoxfalg","输入数字",function(s)
	bai.slot=s
end)
Section1:Button("加载（不保存当前基地）", function()
     ScriptLoadOrSave = true
    local CheckSlot = CheckSlotNumber()
    if CheckSlot ~= false then
        if CheckIfSlotAvailable(CheckSlot) == true then
            local LoadSlot = game.ReplicatedStorage.LoadSaveRequests.RequestLoad:InvokeServer(CheckSlot)
            if LoadSlot == false then
                notify("白", "现在不能加载!", 1)
            end
            if LoadSlot == true then
                notify("白", "已加载!", 2)
                CurrentSlot = CheckSlot
            end
        else
            notify("白", "貌似不工作了", 2)
        end
    else
        notify("白", "请你填数字☹️", 2)
    end
    ScriptLoadOrSave = false
end)
Section1:Button("保存", function()
    local CheckSlot = CheckSlotNumber()
    if CheckSlot ~= false then
        if CurrentSlot ~= -1 then
            ScriptLoadOrSave = true
            local SaveSlot = game.ReplicatedStorage.LoadSaveRequests.RequestSave:InvokeServer(CheckSlot)
            if SaveSlot == true then
                notify("白", "已保存 ✅", 2)
                wait(.5)
                ScriptLoadOrSave = false
            elseif SaveSlot == false then
                notify("白", "保存成功!", 1)
                wait(.5)
                ScriptLoadOrSave = false
            end
        else
            notify("白", "错误会不会弄!", 1)
        end
    else
        notify("白", "你会不会填!", 1)
    end
end)
Section1:Button("免费土地", function()
	for a,b in pairs(workspace.Properties:GetChildren()) do 
		if b:FindFirstChild("Owner") and b:FindFirstChild("OriginSquare") and b.Owner.Value == nil then 
			game.ReplicatedStorage.PropertyPurchasing.ClientPurchasedProperty:FireServer(b, b.OriginSquare.OriginCFrame.Value.p + Vector3.new(0,3,0))
			wait(0.5)
			Instance.new("RemoteEvent", game:service"ReplicatedStorage".Interaction).Name = "Ban"
			for i,v in pairs(game.Workspace.Properties:GetChildren()) do
				if v.Owner.Value == game.Players.LocalPlayer then
					game.Players.LocalPlayer.Character.Humanoid.Jump = true
					wait(0.1)
					game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = v.OriginSquare.CFrame + Vector3.new(0,10,0)
					game.Players.LocalPlayer.Character.Humanoid.Jump = true
					wait(0.1)
				end
			end
		end
	end
end)

Section1:Button("最大土地", function()
    for i, v in pairs(game:GetService("Workspace").Properties:GetChildren()) do
        if v:FindFirstChild("Owner") and v.Owner.Value == game.Players.LocalPlayer then
            base = v
            square = v.OriginSquare
            end
        end
    function makebase(pos)
        local Event = game:GetService("ReplicatedStorage").PropertyPurchasing.ClientExpandedProperty
        Event:FireServer(base, pos)
        end
    spos = square.Position
    makebase(CFrame.new(spos.X + 40, spos.Y, spos.Z))
    makebase(CFrame.new(spos.X - 40, spos.Y, spos.Z))
    makebase(CFrame.new(spos.X, spos.Y, spos.Z + 40))
    makebase(CFrame.new(spos.X, spos.Y, spos.Z - 40))
    makebase(CFrame.new(spos.X + 40, spos.Y, spos.Z + 40))
    makebase(CFrame.new(spos.X + 40, spos.Y, spos.Z - 40))
    makebase(CFrame.new(spos.X - 40, spos.Y, spos.Z + 40))
    makebase(CFrame.new(spos.X - 40, spos.Y, spos.Z - 40))
    makebase(CFrame.new(spos.X + 80, spos.Y, spos.Z))
    makebase(CFrame.new(spos.X - 80, spos.Y, spos.Z))
    makebase(CFrame.new(spos.X, spos.Y, spos.Z + 80))
    makebase(CFrame.new(spos.X, spos.Y, spos.Z - 80))
--Corners--
    makebase(CFrame.new(spos.X + 80, spos.Y, spos.Z + 80))
    makebase(CFrame.new(spos.X + 80, spos.Y, spos.Z - 80))
    makebase(CFrame.new(spos.X - 80, spos.Y, spos.Z + 80))
    makebase(CFrame.new(spos.X - 80, spos.Y, spos.Z - 80))
--Corners--
    makebase(CFrame.new(spos.X + 40, spos.Y, spos.Z + 80))
    makebase(CFrame.new(spos.X - 40, spos.Y, spos.Z + 80))
    makebase(CFrame.new(spos.X + 80, spos.Y, spos.Z + 40))
    makebase(CFrame.new(spos.X + 80, spos.Y, spos.Z - 40))
    makebase(CFrame.new(spos.X - 80, spos.Y, spos.Z + 40))
    makebase(CFrame.new(spos.X - 80, spos.Y, spos.Z - 40))
    makebase(CFrame.new(spos.X + 40, spos.Y, spos.Z - 80))
    makebase(CFrame.new(spos.X - 40, spos.Y, spos.Z - 80))
end)
local Players = Sectionchuanson:Dropdown("选择玩家","Dropdown",bai.dropdown,function(v)
    bai.cswjia= v
end)

Sectionchuanson:Button("重置玩家名称", function()
shuaxinlb(true)
Players:SetOptions(bai.dropdown)
end)	
local Players = Sectionzhengli:Dropdown("选择玩家","Dropdown",bai.dropdown,function(v)
    bai.zlwjia= v
end)

Sectionchuanson:Button("设置传送点", function()
	pcall(function()
		workspace.baiBasedropCord:Destroy();
		bai.itemset=nil
	end)
	local baiBasedropCord=Instance.new("Part")	
	baiBasedropCord.Name="baiBasedropCord";	
	baiBasedropCord.Anchored=true;		
	baiBasedropCord.Parent=game.Workspace;
	baiBasedropCord.Shape=Enum.PartType.Ball;
	baiBasedropCord.Size=Vector3.new(2,2,2)
	baiBasedropCord.Color=Color3.fromRGB(0, 217, 255);
	baiBasedropCord.Material=Enum.Material.ForceField;
	baiBasedropCord.CFrame=lp.Character.HumanoidRootPart.CFrame
bai.itemset=lp.Character.HumanoidRootPart.CFrame
end)
Sectionchuanson:Button("删除传送点", function()
	pcall(function()
		workspace.baiBasedropCord:Destroy();
		bai.itemset=nil
	end)
	
end)
Sectionchuanson:Button("传送东西", function()
	for i=1,20 do
	tpitems("Loose Item")
	wait()
	end
end)
Sectionchuanson:Button("传送斧头", function()
	for i=1,20 do
tpitems("Tool")
wait()
	end
end)

Sectionchuanson:Button("传送家具", function()
	for i=1,20 do
	tpitems("Furniture")
	wait()
	end
	
end)

Sectionchuanson:Button("传送礼物", function()
	for i=1,20 do

	tpitems("Gift")
	wait()
	end
end)
Sectionchuanson:Button("传送木板", function()
	for i=1,20 do
		tpitems("TreeClass")
		wait()
	end
end)
Sectionzhengli:Button("重置玩家名称", function()
shuaxinlb(true)
Players:SetOptions(bai.dropdown)
end)

Sectionzhengli:Textbox("x轴","TextBoxfalg","输入数字",function(txt)
	bai.zix=txt
end)
Sectionzhengli:Textbox("z轴","TextBoxfalg","输入数字",function(txt)
	bai.zlz=txt
end)
Sectionzhengli:Button("获取整理工具", function()
	Identify = Instance.new("Tool")
		Identify.RequiresHandle = false;
		Identify.Name = "点击要整理的物品"
		Identify.Activated:connect(function()
            if mouse.Target.Parent:FindFirstChild("PurchasedBoxItemName") then
                bai.dxmz=mouse.Target.Parent.PurchasedBoxItemName.Value
                     ItemStackerbox(bai.dxmz,bai.zix, bai.zlz) 

            elseif mouse.Target.Parent:FindFirstChild("ItemName") then
                bai.dxmz=mouse.Target.Parent.ItemName.Value
                ItemStackeraxe(bai.dxmz,bai.zix, bai.zlz) 
            end
            end)
		Identify.Parent = game.Players.LocalPlayer.Backpack
end)

Section5:Button("传送木头", function()
	local oldPosition = lp.Character.HumanoidRootPart.Position

    for _, Log in pairs(game.Workspace.LogModels:GetChildren()) do
        if Log.Name:sub(1, 6) == "Loose_" and Log:findFirstChild("Owner") then
            if Log.Owner.Value == game.Players.LocalPlayer then
                tp(Log.WoodSection.CFrame)
                for i=1,60 do
					game.ReplicatedStorage.Interaction.ClientRequestOwnership:FireServer(Log.WoodSection)
					game.ReplicatedStorage.Interaction.ClientIsDragging:FireServer(Log.WoodSection)
					Log:MoveTo(oldPosition)
                    game:GetService("RunService").Stepped:wait();
                end
				tp(oldPosition)
            end
        end
    end
	
end)
Section5:Button("卖木头", function()
sellwood()
end)
Section5:Toggle("拖拽器","Toggleflag",false,function(state)
	if state then
		workspace.ChildAdded:connect(function(Dragger)
			if tostring(Dragger)=="Dragger"then
				local BodyGyro=Dragger:WaitForChild"BodyGyro";
				local BodyPosition=Dragger:WaitForChild"BodyPosition";
				repeat game:GetService"RunService".Stepped:wait()until workspace:FindFirstChild"Dragger";
			   
					BodyPosition.P=120000;
					BodyPosition.D=1000;
					BodyPosition.maxForce=Vector3.new(1,1,1)*1000000;
					BodyGyro.maxTorque=Vector3.new(1,1,1)*200;
					BodyGyro.P=1200;
					BodyGyro.D=140;
			   
			end
		end)
	else
	

workspace.ChildAdded:connect(function(Dragger)
if tostring(Dragger)=="Dragger"then
local BodyGyro=Dragger:WaitForChild"BodyGyro";
local BodyPosition=Dragger:WaitForChild"BodyPosition";
repeat game:GetService"RunService".Stepped:wait()until workspace:FindFirstChild"Dragger";


BodyPosition.P=10000;
BodyPosition.D=800;
BodyPosition.maxForce=Vector3.new(17000,17000,17000);
BodyGyro.maxTorque=Vector3.new(200,200,200);
BodyGyro.P=1200;
BodyGyro.D=140;
end;
end)

	end
end)
Section5:Dropdown("选择树","Dropdown",{"普通树","曲奇树","卡通树","幻影树","砖头木","生命树","玻璃冰木","红颜树", "石头木","沼泽黄金", "樱花", "蓝木", "冰木", "火山木", "橡木", "巧克力木", "白桦木", "黄金木", "雪地松", "僵尸木", "大巧克力树", "椰子树","南瓜木","幽灵木","大理石木","天堂木","虚拟木","玻璃木","糖果树","积木树","发光红色糖果木","彩虹树","雷电木","煤炭木","岩浆树","紫木","下水道木","辐射木","地狱木","沙滩木","白洋木","发光彩虹木","布料木","虚空木","裂纹木","幽灵食尸者","金子木","生锈木","土豆木","星空木","秋天木","星星木","雪木","死木"},function(b)
	if b=="普通树"then
		bai.cuttreeselect="Generic"
	elseif b=="沼泽黄金"then
		bai.cuttreeselect="GoldSwampy"
	elseif b=="樱花"then
		bai.cuttreeselect="Cherry"
	elseif b=="蓝木"then
		bai.cuttreeselect="CaveCrawler"
	elseif b=="冰木"then
		bai.cuttreeselect="Frost"
	elseif b=="火山木"then
		bai.cuttreeselect="Volcano"
	elseif b=="橡木"then
		bai.cuttreeselect="Oak"
	elseif b=="巧克力木"then
		bai.cuttreeselect="Walnut"
	elseif b=="白桦木"then
		bai.cuttreeselect="Birch"
	elseif b=="黄金木"then
		bai.cuttreeselect="SnowGlow"
	elseif b=="雪地松"then
		bai.cuttreeselect="Pine"	
	elseif b=="僵尸木"then
		bai.cuttreeselect="GreenSwampy"
	elseif b=="大巧克力树"then
		bai.cuttreeselect="Koa"
	elseif b=="椰子树"then
		bai.cuttreeselect="Palm"
	elseif b=="幽灵木"then
		bai.cuttreeselect="Spooky"
	elseif b=="南瓜木"then
		bai.cuttreeselect="SpookyNeon"
	elseif b=="大理石木"then
		bai.cuttreeselect="Marble"
	elseif b=="天堂木"then
		bai.cuttreeselect="Sky"
	elseif b=="虚拟木"then
		bai.cuttreeselect="Virtual"
	elseif b=="玻璃木"then
		bai.cuttreeselect="Taco"
	elseif b=="糖果树"then
		bai.cuttreeselect="CandycaneGreen"
	elseif b=="积木树"then
		bai.cuttreeselect="CandycaneRed"
	elseif b=="发光红色糖果木"then
		bai.cuttreeselect="CandyNeon"
	elseif b=="彩虹树"then
		bai.cuttreeselect="Rainbow"
	elseif b=="雷电木"then
		bai.cuttreeselect="Electric"
	elseif b=="煤炭木"then
		bai.cuttreeselect="GenericDead"
	elseif b=="岩浆树"then
		bai.cuttreeselect="Skittles"
	elseif b=="紫木"then
		bai.cuttreeselect="Cavern"
	elseif b=="下水道木"then
		bai.cuttreeselect="MuckySewer"
	elseif b=="辐射木"then
		bai.cuttreeselect="Radioactive"
	elseif b=="地狱木"then
		bai.cuttreeselect="Hell"
	elseif b=="沙滩木"then
		bai.cuttreeselect="Sand"
	elseif b=="白洋木"then
		bai.cuttreeselect="Aspen"
	elseif b=="发光彩虹木"then
		bai.cuttreeselect="NeonRainbow"
	elseif b=="布料木"then
		bai.cuttreeselect="Dog"
    elseif b=="幻影树"then
		bai.cuttreeselect="LoneCave"
    elseif b=="红颜树"then
		bai.cuttreeselect="Shine"
    elseif b=="石头木"then
		bai.cuttreeselect="Magma"
    elseif b=="玻璃冰木"then
            bai.cuttreeselect="Ice"
    elseif b=="砖头木"then
            bai.cuttreeselect="Blah"
    elseif b=="卡通树"then
            bai.cuttreeselect="CobbleStone"
    elseif b=="曲奇树"then
            bai.cuttreeselect="Cookie"
    elseif b=="生命树"then
            bai.cuttreeselect="GreatOak"
    elseif b=="虚空木"then
            bai.cuttreeselect="Void"
     elseif b=="裂纹木"then
            bai.cuttreeselect="Celestial"
     elseif b=="幽灵食尸者"then
            bai.cuttreeselect="SpookyGhoul"
            elseif b=="生锈木"then
            bai.cuttreeselect="SewageTree"
              elseif b=="金子木"then
            bai.cuttreeselect="Gold"
     elseif b=="土豆木"then
            bai.cuttreeselect="Potato"
      elseif b=="星空木"then
            bai.cuttreeselect="Spirit"
      elseif b=="秋天木"then
            bai.cuttreeselect="GenericFall"
       elseif b=="星星木"then
            bai.cuttreeselect="Star"
        elseif b=="雪木"then
            bai.cuttreeselect="Snow"
              elseif b=="死木"then
            bai.cuttreeselect="GenericDead"
           
		end
end)
Section5:Textbox("带来树的数量","TextBoxfalg","输入数字",function(txt)
	bai.bringamount=txt
end)
Section5:Button("带来树", function()
	bai.bringtree=true
	for i=1 , bai.bringamount do
		if bai.bringtree==true then
			task.wait()
			bringTree(bai.cuttreeselect)	
		end
   
	end

	
end)
Section5:Button("停止", function()
	bai.bringtree=false
    workspace.Camera.CameraSubject = lp.Character
end)
Section5:Button("处理树", function()
modwood()
end)
Sectionhuanjin:Toggle("终日白天","Toggleflag",false, function(state)
	if state then 
		bai.awaysday=true
		while task.wait() do
		if bai.awaysday==true then 
			game:GetService("Lighting").TimeOfDay=("12:00:00");
		end
	end
else bai.awaysday=false
	end
	
end)
Sectionhuanjin:Toggle("终日黑天","Toggleflag",false, function(state)
	if state then 
		bai.awaysdnight=true
		while task.wait() do
		if bai.awaysdnight==true then 
			game:GetService("Lighting").TimeOfDay=("2:00:00");
		end
	end
	else
        bai.awaysdnight=false
    end
end)
game:GetService("Lighting").GlobalShadows =true
Sectionhuanjin:Toggle("消除阴影","Toggleflag",false, function(state)


		if state then
			game:GetService("Lighting").GlobalShadows=false
		else
			game:GetService("Lighting").GlobalShadows=true
		end

end)
Sectionhuanjin:Button("删除灵视神殿的石头",  function()
	workspace.Region_Mountainside.BoulderRegen.Boulder:Destroy()
	workspace.Region_Mountainside.Door.Door:Destroy()

end)
Sectionhuanjin:Toggle("删除岩浆","Toggleflag",false,function(state)
	for i,v in pairs(game.Workspace.Region_Volcano:GetDescendants()) do
		if v.Name == "TouchInterest" then
		  v:Destroy()
		elseif v.Name == "Lava" then
		  for n,k in pairs(v:GetChildren()) do
			if k:IsA("Part") then
			  if state == true then
				k.Transparency = 1
			  else
				k.Transparency = 0
			  end
			end
		  end
		end
	  end
end)
Sectionhuanjin:Toggle("删除水","Toggleflag",false,function(state)
	for _,v in pairs(game.Workspace.Water:GetChildren()) do
		if v.Name == "Water" then
		  if state then
			v.Transparency = 1;
		  else
			v.Transparency = 0;
		  end
		end
	  end
end)

Sectionhuanjin:Toggle("去除雾","Toggleflag",false, function(state)
	if state then 
		bai.nofog=true
		while task.wait() do
		if bai.nofog==true then 
	game:GetService("Lighting").FogEnd=1000000;
		end
	end
else bai.nofog=false
	end
end)
Sectionhuanjin:Toggle("水上行走","Toggleflag",false, function(state)
	for i,v in next,game.workspace.Water:children()do
		if v.ClassName=="Part"then
			bai.waterwalk,v.CanCollide=state,state;
		end;
	end;
	for i,v in next,game:GetService("Workspace").Bridge.VerticalLiftBridge.WaterModel:children()do 
		if v:IsA("BasePart")then 
			v.CanCollide=state;
		end;
	end;


end)
Sectionautobuy:Textbox("购买数量","TextBoxfalg","输入数字",function(txt)
	bai.autobuyamount = txt
end)
local w={}
 for _,s in pairs (game.Workspace.Stores:GetChildren()) do
     
          if s.Name~= "LandStore" then
              
             for _,l in pairs (s.ShopItems:GetChildren()) do
    if not table.find(w, l.Name) then
        table.insert(w, l.Name)
    end
end
end
end


Sectionautobuy:Dropdown("自动购买的物品","Dropdown",w, function(a)
w=a

end)

Sectionautobuy:Button("买", function()
	bai.autobuystop=false
	bai.autobuyset=lp.Character.HumanoidRootPart.CFrame

	autobuy(w, bai.autobuyamount)
	task.wait()
	tp(bai.autobuyset)
end)
Sectionautobuy:Button("停止购买", function()
	bai.autobuystop=true
	pcall(function()
		bai.autocsdx:Disconnect();
		bai.autocsdx=nil;
	end)

	end)
else
    print("没有白名单")
end
