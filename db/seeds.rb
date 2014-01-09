ActiveRecord::Base.transaction do

  Post.create!(:title => "title title1", :body => "body body body");
  Post.create!(:title => "title title2", :body => "body body body");
  Post.create!(:title => "title title3", :body => "body body body");
  Post.create!(:title => "title title4", :body => "body body body");
end